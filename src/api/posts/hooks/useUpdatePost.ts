import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { updatePostService } from '../../../services/postService';
import { QUERY_KEYS } from '../../react-query/queryKeys';
import type { Post } from '../../../types/post';

type UpdatePostInput = { id: number; data: Partial<Post> };

/**
 * useUpdatePost: mutation for editing posts.
 * - On success invalidate both the post and posts list caches.
 */

export function useUpdatePost(): UseMutationResult<
  Post,
  Error,
  UpdatePostInput
> {
  const qc = useQueryClient();
  return useMutation<Post, Error, UpdatePostInput>({
    mutationFn: ({ id, data }: UpdatePostInput) => updatePostService(id, data),
    onSuccess: (updatedPost, variables) => {
      // Update the cache immediately with the response
      qc.setQueryData(QUERY_KEYS.post(variables.id), updatedPost);
      // Invalidate the list to refetch
      qc.invalidateQueries({ queryKey: QUERY_KEYS.post(variables.id) });
      qc.invalidateQueries({ queryKey: QUERY_KEYS.posts });
    },
  });
}
