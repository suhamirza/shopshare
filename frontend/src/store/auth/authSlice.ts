// frontend/src/store/auth/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

// Define the auth state interface
interface AuthState {
  user: User | null; // Uses the imported User interface
  token: string | null;
}

// Define the initial state
const initialState: AuthState = {
  user: null,
  token: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Placeholder reducer to set auth status
    setAuthStatus: (
      state,
      // Uses the imported User interface in PayloadAction as well
      action: PayloadAction<{ user: User | null; token: AuthState['token'] }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // Additional placeholder reducer to clear auth
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Export actions
export const { setAuthStatus, clearAuth } = authSlice.actions;

// Export reducer
export default authSlice.reducer;