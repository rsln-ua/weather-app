import {
  CITY_HISTORY_PATHNAME,
  CURRENT_WEATHER_PATHNAME,
  QUERY_PARAMS_KEYS,
  WEATHER_API_HOSTNAME,
  WEATHER_API_KEY,
} from '../constants/api';

interface IDecorateUrl {
  (url: URL): void;
}

export const addTokenToUrl: IDecorateUrl = (url) => {
  url.searchParams.set(QUERY_PARAMS_KEYS.apiKey, WEATHER_API_KEY);
};

export const convertToCelsi: IDecorateUrl = (url) => {
  url.searchParams.set(QUERY_PARAMS_KEYS.units, 'metric');
};

interface TGetWeatherUrlParams {
  locationId?: number;
  locationName?: string;
}

interface IGetUrl<T> {
  (params: T): URL;
}

export const getWeatherUrl: IGetUrl<TGetWeatherUrlParams> = ({locationName, locationId}) => {
  const url = new URL(CURRENT_WEATHER_PATHNAME, WEATHER_API_HOSTNAME);

  addTokenToUrl(url);
  convertToCelsi(url);

  if (locationId) url.searchParams.set(QUERY_PARAMS_KEYS.locationId, locationId.toString());
  else if (locationName) url.searchParams.set(QUERY_PARAMS_KEYS.cityName, locationName);

  return url;
};

interface TGetWeatherHistoryUrlParams {
  lat: number;
  lon: number;
}

export const getWeatherHistoryUrl: IGetUrl<TGetWeatherHistoryUrlParams> = ({lat, lon}) => {
  const url = new URL(CITY_HISTORY_PATHNAME, WEATHER_API_HOSTNAME);

  addTokenToUrl(url);
  convertToCelsi(url);

  url.searchParams.set(QUERY_PARAMS_KEYS.type, 'hour');

  url.searchParams.set(QUERY_PARAMS_KEYS.lat, lat.toString());
  url.searchParams.set(QUERY_PARAMS_KEYS.lon, lon.toString());

  return url;
};
