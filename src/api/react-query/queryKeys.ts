export const QUERY_KEYS = {
  posts: ['posts'] as const,
  post: (id: number | string) => ['posts', id] as const,
};
