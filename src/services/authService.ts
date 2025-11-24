// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { api } from './api';
import type { User } from '../types/auth';

/**
 * Authentication service simulation only for demo purpose
 *
 * - loginRequest and registerRequest mimic calling a backend for authentication.
 * - They return a user object and an access token string.
 * - Side-effects: store token in localStorage for session persistence.
 *
 * this keeps the UI flows realistic without requiring a real auth API.
 */
export async function loginRequest(
  email: string,
  password: string
): Promise<{ user: User; token: string }> {
  // Fetching a dummy user from jsonplaceholder and generating a token for authentication due to not having production server for User separately
  const response = await api.get<User>('/users/1');
  const user: User = { id: response.data.id, name: response.data.name, email };
  const token = `vynspire-demo-token-${Date.now()}`; // currently using current time stamp for token later we can use encrypted code as well or JWT auth
  return { user, token };
}

export async function registerRequest(
  name: string,
  email: string,
  password: string
): Promise<{ user: User; token: string }> {
  // Fetching a dummy user from jsonplaceholder and generating a token for authentication due to not having production server for User separately
  const response = await api.get<User>('/users/1');
  const user: User = { id: response.data.id, name: response.data.name, email };
  const token = `vynspire-demo-token-${Date.now()}`; // currently using current time stamp for token later we can use encrypted code as well or JWT auth
  return { user, token };
}
