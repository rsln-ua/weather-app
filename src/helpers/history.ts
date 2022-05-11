import {TAllWeatherDataResponse, THourData} from '../types/weatherHistory';

interface IHourDataToState {
  (data: TAllWeatherDataResponse): Array<THourData>;
}

export const hourDataToState: IHourDataToState = (data) => {
  return data.hourly.map((el) => ({
    temp: el.temp,
    date: el.dt * 1000,
  }));
};
