import {message} from 'antd';
import axios from 'axios';
import {getWeatherHistoryUrl, getWeatherUrl} from '../helpers/api';
import {hourDataToState} from '../helpers/history';
import {locationToState} from '../helpers/location';
import {currentLocationActions, locationsActions} from '../reducers';
import {SimpleError} from '../types/helpers';
import {TAction} from '../types/store';
import {TWeatherResponse} from '../types/weather';
import {TAllWeatherDataResponse} from '../types/weatherHistory';

const errorLocationExist = 'Location already exist.';

export interface IAddLocation {
  locationName: string;
}

export const actionAddLocation: TAction<IAddLocation> =
  ({locationName}, promise) =>
  async (dispatch, getState) => {
    const {
      locations: {data: locations},
    } = getState();

    try {
      dispatch(locationsActions.setLoading(true));
      const {data} = await axios.get<TWeatherResponse>(getWeatherUrl({locationName: locationName}).href);

      if (locations.some((el) => el.locationId === data.id)) throw new Error(errorLocationExist);

      dispatch(locationsActions.addLocations(locationToState(data)));
      promise?.resolve();
    } catch (error) {
      message.error((error as SimpleError).message);
      promise?.reject();
    } finally {
      dispatch(locationsActions.setLoading(false));
    }
  };

interface IRemoveLocation {
  locationId: number;
}

export const actionRemoveLocation: TAction<IRemoveLocation> =
  ({locationId}) =>
  (dispatch) => {
    dispatch(locationsActions.removeLocations(locationId));
  };

interface IUpdateLocation {
  locationId: number;
}

export const actionReloadLocation: TAction<IUpdateLocation> =
  ({locationId}) =>
  async (dispatch) => {
    try {
      dispatch(locationsActions.setLoading(true));
      const {data} = await axios.get<TWeatherResponse>(getWeatherUrl({locationId}).href);
      dispatch(locationsActions.updateLocation(locationToState(data)));
    } catch (error) {
      message.error((error as SimpleError).message);
    } finally {
      dispatch(locationsActions.setLoading(false));
    }
  };

interface IGetLocationData {
  locationId: number;
}

export const actionGetLocationData: TAction<IGetLocationData> =
  ({locationId}) =>
  async (dispatch) => {
    try {
      dispatch(currentLocationActions.setLoading(true));

      const {data: weatherData} = await axios.get<TWeatherResponse>(getWeatherUrl({locationId}).href);
      dispatch(currentLocationActions.setLocation(locationToState(weatherData)));

      const {data: historyData} = await axios.get<TAllWeatherDataResponse>(
        getWeatherHistoryUrl({lat: weatherData.coord.lat, lon: weatherData.coord.lon}).href,
      );
      dispatch(currentLocationActions.setHistory(hourDataToState(historyData)));
    } catch (error) {
      message.error((error as SimpleError).message);
    } finally {
      dispatch(currentLocationActions.setLoading(false));
    }
  };

interface ILoadLocations {
  locationIds: Array<number>;
}

export const actionLoadLocations: TAction<ILoadLocations> =
  ({locationIds}) =>
  async (dispatch) => {
    try {
      dispatch(locationsActions.setLoading(true));

      const data = (await Promise.allSettled(
        locationIds.map((el) =>
          axios.get<TWeatherResponse>(getWeatherUrl({locationId: el}).href).then((res) => res.data),
        ),
      ).then((res) => res.filter((el) => el.status === 'fulfilled'))) as Array<
        PromiseFulfilledResult<TWeatherResponse>
      >;
      dispatch(locationsActions.setLocations(data.map((el) => locationToState(el.value))));
    } catch (error) {
      message.error((error as SimpleError).message);
    } finally {
      dispatch(locationsActions.setLoading(false));
    }
  };
