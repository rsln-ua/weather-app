import {TLocation, TWeatherResponse} from '../types/weather';

interface ILocationToState {
  (data: TWeatherResponse): TLocation;
}

export const locationToState: ILocationToState = (data) => {
  const {weather, main, sys, name, wind, id} = data;

  return {
    // fixme: may be more, then one weather state
    main: weather[0]?.main,
    description: weather[0]?.description,
    feels_like: main.feels_like,
    humidity: main.humidity,
    pressure: main.pressure,
    temp: main.temp,
    temp_max: main.temp_max,
    temp_min: main.temp_min,
    locationId: id,
    sunrise: sys.sunrise,
    sunset: sys.sunset,
    locationName: name,
    wind_deg: wind.deg,
    wind_speed: wind.speed,
  };
};
