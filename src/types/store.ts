import {AppThunk} from '../store';
import {TLocation} from './weather';
import {THourData} from './weatherHistory';

export interface TStore {
  locations: {
    error: null | string;
    loading: boolean;
    data: Array<TLocation>;
  };
  currentLocation: {
    error: null | string;
    loading: boolean;
    data: TLocation | null;
    history: Array<THourData>;
  };
}

export interface TAction<T> {
  (data: T, promise?: {resolve: () => void; reject: (reason?: any) => void}): AppThunk;
}
