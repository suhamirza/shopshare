import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the user interface
interface User {
  id: string;
  email: string;
  firstName: string;
}

// Define the auth state interface
interface AuthState {
  user: User | null;
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
      action: PayloadAction<{ user: AuthState['user']; token: AuthState['token'] }>
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
