export interface TAllWeatherDataResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: TCurrent;
  minutely: TMinutely[];
  hourly: TCurrent[];
  daily: TDaily[];
}

export interface TCurrent {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: TWeather[];
  pop?: number;
  rain?: TRain;
}

export interface TRain {
  '1h': number;
}

export interface TWeather {
  id: number;
  main: TMain;
  description: TDescription;
  icon: TIcon;
}

export enum TDescription {
  BrokenClouds = 'broken clouds',
  ClearSky = 'clear sky',
  LightRain = 'light rain',
  ModerateRain = 'moderate rain',
  OvercastClouds = 'overcast clouds',
  ScatteredClouds = 'scattered clouds',
}

export enum TIcon {
  The01D = '01d',
  The03D = '03d',
  The04D = '04d',
  The04N = '04n',
  The10D = '10d',
  The10N = '10n',
}

export enum TMain {
  Clear = 'Clear',
  Clouds = 'Clouds',
  Rain = 'Rain',
}

export interface TDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: TTemp;
  feels_like: TFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: TWeather[];
  clouds: number;
  pop: number;
  uvi: number;
  rain?: number;
}

export interface TFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface TTemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface TMinutely {
  dt: number;
  precipitation: number;
}

export interface THourData {
  temp: number;
  date: number;
}
