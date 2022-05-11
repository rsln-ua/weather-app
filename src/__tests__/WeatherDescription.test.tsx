import React from 'react';
import renderer from 'react-test-renderer';
import {IProps, WeatherDescription} from '../components/Locations/WeatherDescription';

it('render correctly weather description component', () => {
  const props: IProps = {
    location: {
      locationId: 1234,
      description: 'Lorem ipsum dolor',
      locationName: 'Lorem',
      feels_like: 23,
      main: 'Lorem ipsum',
      humidity: 45,
      pressure: 2,
      sunrise: 1652251732,
      sunset: 1652251732,
      temp: 56,
      temp_max: 90,
      temp_min: 12,
      wind_deg: 34,
      wind_speed: 77,
    },
  };

  const WeatherDescriptionComponent = renderer.create(<WeatherDescription {...props} />).toJSON();
  expect(WeatherDescriptionComponent).toMatchSnapshot();
});
