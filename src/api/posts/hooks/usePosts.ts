import {
  keepPreviousData,
  useQuery,
  type UseQueryResult,
} from '@tanstack/react-query';
import { fetchPosts } from '../../../services/postService';
import { QUERY_KEYS } from '../../react-query/queryKeys';
import type { Post } from '../../../types/post';

export function usePosts(): UseQueryResult<Post[], Error> {
  return useQuery<Post[], Error>({
    queryKey: QUERY_KEYS.posts,
    queryFn: fetchPosts,
    placeholderData: keepPreviousData,
  });
}

export function paginate<T>(
  items: T[],
  page: number,
  limit: number
): { paged: T[]; total: number } {
  const total = items.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  return { paged: items.slice(start, end), total };
}
