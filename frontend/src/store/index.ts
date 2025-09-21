import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// Configure the Redux store
export const store = configureStore({
  reducer: rootReducer,
  // Enable Redux DevTools in development
  devTools: __DEV__,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store as default
export default store;
