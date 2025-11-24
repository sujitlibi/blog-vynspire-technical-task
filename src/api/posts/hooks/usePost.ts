import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { fetchPostById } from '../../../services/postService';
import { QUERY_KEYS } from '../../react-query/queryKeys';
import type { Post } from '../../../types/post';

export function usePost(id?: number): UseQueryResult<Post, Error> {
  return useQuery<Post, Error>({
    queryKey: QUERY_KEYS.post(id ?? 0), // Ensure this returns an array
    queryFn: () => fetchPostById(Number(id)),
    enabled: !!id,
  });
}
