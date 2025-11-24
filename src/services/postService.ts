import { api } from './api';
import type { Post } from '../types/post';

/**
 * Post service: typed wrappers for CRUD operations.
 * - I map jsonplaceholder responses to Post type.
 * - create/update/delete are simulated—jsonplaceholder will not persist changes permanently,
 *   but it returns suitable responses for the UI.
 */

/**
 * Fetch posts from the API and return a trimmed list for the demo.
 * I slice to 100 items at most to keep client pagination performant in the demo.
 */

export async function fetchPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>('/posts');
  return response.data.slice(0, 100).map((post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    userId: post.userId,
    tags: [],
  }));
}

export async function fetchPostById(id: number): Promise<Post> {
  const response = await api.get<Post>(`/posts/${id}`);
  const post = response.data;
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    userId: post.userId,
    tags: [],
  };
}

export async function createPost(data: Partial<Post>): Promise<Post> {
  const response = await api.post<Post>('/posts', data);
  return {
    id: response.data.id ?? Date.now(),
    title: data.title ?? '',
    body: data.body ?? '',
    userId: data.userId,
    tags: data.tags ?? [],
  };
}

export async function updatePostService(
  id: number,
  data: Partial<Post>
): Promise<Post> {
  await api.put(`/posts/${id}`, data);
  return {
    id,
    title: data.title ?? '',
    body: data.body ?? '',
    userId: data.userId,
    tags: data.tags ?? [],
  };
}

export async function deletePostService(id: number): Promise<boolean> {
  await api.delete(`/posts/${id}`);
  return true;
}
