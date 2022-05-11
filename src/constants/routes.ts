import {Route} from '../entities/Route';

export const routes = {
  any: Route.of('*'),
  main: Route.of('/'),
  locationWeather: Route.of<{id: string}>('/location/:id'),
};
