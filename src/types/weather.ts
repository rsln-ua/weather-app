export interface TCoord {
  lon: number;
  lat: number;
}

export interface TWeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface TMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface TWind {
  speed: number;
  deg: number;
}

export interface TClouds {
  all: number;
}

export interface TSys {
  type: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface TWeatherResponse {
  coord: TCoord;
  weather: TWeatherInfo[];
  base: string;
  main: TMain;
  visibility: number;
  wind: TWind;
  clouds: TClouds;
  dt: number;
  sys: TSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface TLocation {
  main: string;
  description: string;

  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;

  locationName: string;

  locationId: number;
  sunrise: number;
  sunset: number;

  wind_deg: number;
  wind_speed: number;
}
