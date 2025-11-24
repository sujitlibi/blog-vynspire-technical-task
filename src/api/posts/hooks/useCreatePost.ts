import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { createPost } from '../../../services/postService';
import { QUERY_KEYS } from '../../react-query/queryKeys';
import type { Post } from '../../../types/post';

type CreatePostInput = Partial<Post>;

/**
 * useCreatePost: mutation hook to create a post.
 * - onSuccess invalidates posts list so UI shows fresh data.
 */

export function useCreatePost(): UseMutationResult<
  Post,
  Error,
  CreatePostInput
> {
  const qc = useQueryClient();
  return useMutation<Post, Error, CreatePostInput>({
    mutationFn: (input: CreatePostInput) => createPost(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: QUERY_KEYS.posts }),
  });
}
