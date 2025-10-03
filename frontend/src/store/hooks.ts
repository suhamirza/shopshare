import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Use throughout the app instead of plain `useDispatch` and `useSelector`
// this function allows components to dispatch or "announce" actions to the Redux store
export const useAppDispatch = () => useDispatch<AppDispatch>();
// this function allows components to read or "select" data from the Redux store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
