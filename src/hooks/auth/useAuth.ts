import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setAuth,
  setLoading,
  setError,
  logout,
} from '../../redux/slice/authSlice';
import * as authService from '../../services/authService';
import type { User } from '../../types/auth';

/**
 * useAuth: centralizes login/register/logout flows and persistence.
 *
 * - On mount, hydrates Redux store from localStorage (if token+user exist).
 * - login/register call authService and persist to localStorage.
 * - logout clears storage and Redux state.
 *
 * Rationale:
 * - Keeping persistence logic inside a hook keeps the slice pure and testable.
 */
export function useAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userJson = localStorage.getItem('user');
    if (token && userJson) {
      try {
        const user: User = JSON.parse(userJson);
        dispatch(setAuth({ user, token }));
      } catch {
        // Corrupt data: clear storage to avoid inconsistent state
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, [dispatch]);

  const login = useCallback(
    async (email: string, password: string) => {
      dispatch(setLoading(true));
      try {
        const { user, token } = await authService.loginRequest(email, password);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(setAuth({ user, token }));
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Login failed';
        dispatch(setError(message));
        throw err;
      }
    },
    [dispatch]
  );

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      dispatch(setLoading(true));
      try {
        const { user, token } = await authService.registerRequest(
          name,
          email,
          password
        );
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(setAuth({ user, token }));
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Registration failed';
        dispatch(setError(message));
        throw err;
      }
    },
    [dispatch]
  );

  const logoutUser = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(logout());
  }, [dispatch]);

  return { login, register, logout: logoutUser };
}
