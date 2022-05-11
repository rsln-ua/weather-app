import React, {ReactNode, useEffect} from 'react';
import {useDispatch} from '../hooks/store';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {getIdsFromLocalStorage, saveIdsToLocalStorage} from '../helpers/location';
import {actionLoadLocations} from '../actions/locations';

export const SyncWithLocalStorageContainer: React.FC<{children?: ReactNode}> = ({children}) => {
  const dispatch = useDispatch();
  const locations = useSelector((state: RootState) => state.locations.data);

  useEffect(() => {
    const ids = getIdsFromLocalStorage();
    dispatch(actionLoadLocations({locationIds: ids}));
  }, []);

  useEffect(() => {
    saveIdsToLocalStorage(locations);
  }, [locations]);

  return <>{children}</>;
};
