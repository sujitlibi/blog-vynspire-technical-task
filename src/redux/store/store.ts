import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';

/**
 * Main Redux store.
 * - Only auth slice is kept here.
 * - Server state (posts) is handled by React Query for better caching & offline UX.
 */

export const store = configureStore({
  reducer: {
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
