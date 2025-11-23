import { api } from './api';
import type { Post } from '../types/post';

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
