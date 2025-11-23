import { api } from './api';
import type { User } from '../types/auth';

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
