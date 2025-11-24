import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User } from '../../types/auth';

/**
 * Redux slice for authentication.
 *
 * Business logic:
 * - Auth is stored in Redux so components (Navbar, PrivateRoute) can read it synchronously.
 * - I store token & user in localStorage via useAuth hook (persistence).
 * - Slice reducers are intentionally simple to keep state transitions predictable and testable.
 */

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(
      state,
      action: PayloadAction<{
        user: User;
        token: string;
      }>
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
    logout(state) {
      (state.user = null),
        (state.token = null),
        (state.isAuthenticated = false),
        (state.loading = false),
        (state.error = null);
    },
  },
});

export const { setAuth, setLoading, setError, logout } = authSlice.actions;
export default authSlice.reducer;
