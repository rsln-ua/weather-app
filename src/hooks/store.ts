import {useDispatch as useOriginalDispatch} from 'react-redux';
import {Dispatch} from 'redux';

export const useDispatch = () => {
  // FIXME: make normal typization
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useOriginalDispatch() as Dispatch<any>;
};
