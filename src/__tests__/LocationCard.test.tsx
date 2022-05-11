import React from 'react';
import renderer from 'react-test-renderer';
import {IProps, LocationCard} from '../components/Locations/LocationCard';
import {TestProvider} from '../containers/TestProvider';

it('render correctly location card component', () => {
  const props: IProps = {
    description: 'Lorem ipsum dolor',
    main: 'Lorem ipsum',
    locationName: 'Lorem',
    id: 1234,
    temp: 30,
    humidity: 30,
    windSpeed: 10,
    reloadLocation: () => {
      return;
    },
    deleteLocation: () => {
      return;
    },
  };

  const LocationCardComponent = renderer
    .create(
      <TestProvider>
        <LocationCard {...props} />
      </TestProvider>,
    )
    .toJSON();
  expect(LocationCardComponent).toMatchSnapshot();
});
