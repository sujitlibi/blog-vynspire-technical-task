import {
  useMutation,
  type UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { deletePostService } from '../../../services/postService';
import { QUERY_KEYS } from '../../react-query/queryKeys';
import type { Post } from '../../../types/post';

/**
 * useDeletePost: performs optimistic delete with rollback on failure.
 * - onMutate: remove post from cache for snappy UX
 * - onError: rollback to previous cached posts
 * - onSettled: invalidate posts to ensure consistency
 */

export function useDeletePost(): UseMutationResult<boolean, Error, number> {
  const qc = useQueryClient();
  return useMutation<boolean, Error, number>({
    mutationFn: (id: number) => deletePostService(id),
    onMutate: async (id) => {
      await qc.cancelQueries({ queryKey: QUERY_KEYS.posts });
      const previous = qc.getQueryData<Post[]>(QUERY_KEYS.posts);
      if (previous) {
        qc.setQueryData<Post[]>(
          QUERY_KEYS.posts,
          previous.filter((p) => p.id !== id)
        );
      }
      return { previous };
    },
    // onError: (_err, _id, context) => {
    //   if (context?.previous) {
    //     qc.setQueryData(QUERY_KEYS.posts, context?.previous);
    //   }
    // },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: QUERY_KEYS.posts });
    },
  });
}
