import {configureStore, ThunkAction, Action, isPlain} from '@reduxjs/toolkit';
import {TStore} from './types/store';
import {locationsState, currentLocationState} from './reducers';

export const store = configureStore<TStore>({
  reducer: {
    locations: locationsState,
    currentLocation: currentLocationState,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
