import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {RootState} from '../store';
import {ViewLocation} from '../components/Locations/ViewLocation';
import {useDispatch} from '../hooks/store';
import {actionGetLocationData} from '../actions/locations';
import {Spin} from '../components/Spin';

export const ViewLocationContainer: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();
  const {data: location, loading} = useSelector((state: RootState) => state.currentLocation);

  useEffect(() => {
    dispatch(actionGetLocationData({locationId: +(id as string)}));
  }, []);

  if (!location) return null;

  return (
    <Spin spinning={loading}>
      <ViewLocation location={location} />
    </Spin>
  );
};
