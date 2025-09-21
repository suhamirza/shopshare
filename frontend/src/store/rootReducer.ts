import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import listsSlice from './lists/listsSlice';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authSlice,
  lists: listsSlice,
});

export default rootReducer;
