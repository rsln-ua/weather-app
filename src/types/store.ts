import {AppThunk} from '../store';
import {TLocation} from './weather';
import {THourData} from './weatherHistory';

export interface TStore {
  locations: {
    loading: boolean;
    data: Array<TLocation>;
  };
  currentLocation: {
    loading: boolean;
    data: TLocation | null;
    history: Array<THourData>;
  };
}

export interface TAction<T> {
  (data: T, promise?: {resolve: () => void; reject: (reason?: any) => void}): AppThunk;
}
