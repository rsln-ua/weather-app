import {combineReducers, createAction, createReducer, PayloadAction} from '@reduxjs/toolkit';
import {TLocation} from '../types/weather';
import {THourData} from '../types/weatherHistory';

export const setLocation = createAction<TLocation>('set locations');
export const setHistory = createAction<Array<THourData>>('set history');
export const clearData = createAction('clear locations');
export const setLoading = createAction<boolean>('set loading');

export const data = createReducer<TLocation | null>(null, {
  [setLocation.type]: (_, {payload}: PayloadAction<TLocation>) => payload,
  [clearData.type]: () => null,
});

export const history = createReducer<Array<THourData>>([], {
  [setHistory.type]: (_, {payload}: PayloadAction<Array<THourData>>) => payload,
  [clearData.type]: () => [],
});

export const loading = createReducer(false, {
  [setLoading.type]: (_, {payload}: PayloadAction<boolean>) => payload,
});

export const currentLocationState = combineReducers({
  data,
  loading,
  history,
});

export const currentLocationActions = {
  setLocation,
  setHistory,
  clearData,
  setLoading,
};
