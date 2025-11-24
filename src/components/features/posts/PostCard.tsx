import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../../../types/post';
import { useDeletePost } from '../../../api/posts/hooks/useDeletePost';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../api/react-query/queryKeys';

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
    <div className="p-4 border rounded app-surface">
      <h3 className="font-semibold mb-2">{post.title}</h3>
      <p className="text-sm mb-3">{post.body.slice(0, 120)}...</p>
      <div className="flex gap-2">
        <button
          onMouseEnter={handlePrefetch}
          onClick={() => navigate(`/admin/posts/${post.id}`)}
          className="px-2 py-1 border rounded"
        >
          View
        </button>
        <button
          onClick={() => navigate(`/admin/posts/${post.id}/edit`)}
          className="px-2 py-1 border rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-2 py-1 border rounded text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export const PostCard = React.memo(PostCardInner);
