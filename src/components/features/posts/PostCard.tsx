import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../../../types/post';
import { useDeletePost } from '../../../api/posts/hooks/useDeletePost';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../api/react-query/queryKeys';
import { Eye, SquarePen, Trash } from 'lucide-react';

type Props = { post: Post };

/**
 * PostCard:
 * - Memoized presentational card to avoid extra re-renders when parent updates.
 * - Prefetches post detail on hover to speed up navigation (react-query prefetch).
 * - Delete uses optimistic update pattern handled in useDeletePost.
 */
const PostCardInner: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate();
  const deleteMutation = useDeletePost();
  const qc = useQueryClient();

  const handleDelete = useCallback(async () => {
    if (!confirm('Delete this post?')) return;
    try {
      await deleteMutation.mutateAsync(post.id);
    } catch {
      alert('Delete failed');
    }
  }, [deleteMutation, post.id]);

  const handlePrefetch = useCallback(() => {
    // Prefetch post details to make viewing instant
    qc.prefetchQuery({
      queryKey: QUERY_KEYS.post(post.id),
      queryFn: () => Promise.resolve(post),
    });
  }, [qc, post]);

  return (
    <div className="p-4 shadow-sm rounded bg-white dark:bg-gray-800 app-surface dark:border-gray-700 relative min-h-[180px]">
      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
        {post.title}
      </h3>
      <p className="text-sm mb-3 text-gray-600 dark:text-gray-300">
        {post.body.slice(0, 120)}...
      </p>

      <div className="flex gap-2 absolute bottom-4 right-4">
        <button
          onMouseEnter={handlePrefetch}
          onClick={() => navigate(`/admin/posts/${post.id}`)}
          className="px-2 py-1 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
          title="View"
        >
          <Eye />
        </button>
        <button
          onClick={() => navigate(`/admin/posts/${post.id}/edit`)}
          className="px-2 py-1 text-green-500 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded transition-colors"
          title="Edit"
        >
          <SquarePen />
        </button>
        <button
          onClick={handleDelete}
          className="px-2 py-1 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
          title="Delete"
        >
          <Trash />
        </button>
      </div>
    </div>
  );
};

export const PostCard = React.memo(PostCardInner);
