import {combineReducers, createAction, createReducer, PayloadAction} from '@reduxjs/toolkit';
import {TLocation} from '../types/weather';

export const setLocations = createAction<Array<TLocation>>('set_data');
export const addLocations = createAction<TLocation>('add locations');
export const removeLocations = createAction<number>('remove locations');
export const updateLocation = createAction<TLocation>('update locations');
export const setLoading = createAction<boolean>('set loading');
export const setError = createAction<string | null>('set error');

export const locations = createReducer<Array<TLocation>>([], {
  [setLocations.type]: (_, {payload}: PayloadAction<Array<TLocation>>) => payload,
  [addLocations.type]: (state, {payload}: PayloadAction<TLocation>) => [...state, payload],
  [updateLocation.type]: (state, {payload}: PayloadAction<TLocation>) =>
    state.map((el) => (el.locationId === payload.locationId ? payload : el)),
  [removeLocations.type]: (state, {payload}: PayloadAction<number>) => state.filter((el) => el.locationId !== payload),
});

export const loading = createReducer(false, {
  [setLoading.type]: (_, {payload}: PayloadAction<boolean>) => payload,
});

export const error = createReducer<string | null>(null, {
  [setError.type]: (_, {payload}: PayloadAction<string | null>) => payload,
});

export const locationsState = combineReducers({
  data: locations,
  loading,
  error,
});

export const locationsActions = {
  setLocations,
  addLocations,
  removeLocations,
  updateLocation,
  setLoading,
  setError,
};
