import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {actionAddLocation, actionReloadLocation} from '../actions/locations';
import {useDispatch} from '../hooks/store';
import {locationsActions} from '../reducers';
import {Locations} from '../components/Locations';
import {Spin} from '../components/Spin';

export const LocationsContainer: React.FC = () => {
  const {data, loading} = useSelector((state: RootState) => state.locations);
  const dispatch = useDispatch();

  const handleAddLocation = (locationName: string) => {
    return new Promise<void>((resolve, reject) => dispatch(actionAddLocation({locationName}, {resolve, reject})));
  };

  const handleDeleteLocation = (locationId: number) => {
    dispatch(locationsActions.removeLocations(locationId));
  };

  const handleReloadLocation = (locationId: number) => {
    dispatch(actionReloadLocation({locationId}));
  };

  return (
    <Spin spinning={loading}>
      <Locations
        data={data}
        addLocation={handleAddLocation}
        deleteLocation={handleDeleteLocation}
        reloadLocation={handleReloadLocation}
      />
    </Spin>
  );
};
