import React, { useMemo, useCallback } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { usePosts, paginate } from '../../../api/posts/hooks/usePosts';
import { PostCard } from '../../../components/features/posts/PostCard';
import type { Post } from '../../../types/post';

/**
 * Dashboard:
 * - Client-side pagination (URL-synced) for fast UX and deep-linking.
 * - Uses useMemo to avoid recalculating paged arrays unless dependencies change.
 * - Shows skeletons while loading to avoid layout jumps.
 */

const DEFAULT_LIMIT = 9;

const PostListPage: React.FC = () => {
  const { data, isLoading, isError } = usePosts();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const pageStr = searchParams.get('page') ?? '1';
  const limitStr = searchParams.get('limit') ?? String(DEFAULT_LIMIT);
  const page = Math.max(1, Number(pageStr));
  const limit = Math.max(1, Number(limitStr));

  const items = useMemo(() => data ?? [], [data]);

  const { paged, total } = useMemo(
    () => paginate<Post>(items, page, limit),
    [items, page, limit]
  );
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const goToPage = useCallback(
    (p: number) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', String(p));
      setSearchParams(params);
      navigate({ search: params.toString() }, { replace: false });
    },
    [searchParams, setSearchParams, navigate]
  );

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl text-gray-900 dark:text-white">Posts</h2>
          <Link
            to="/admin/posts/create"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded "
          >
            Create Post
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: limit }).map((_, idx) => (
            <div
              key={idx}
              className="p-4 border rounded app-surface animate-pulse h-40"
            />
          ))}
        </div>
      </div>
    );
  }

  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl text-gray-900 dark:text-white">Posts</h2>
        <Link
          to="/admin/posts/create"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded "
        >
          Create Post
        </Link>
      </div>

      {paged.length === 0 ? (
        <div>No posts found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paged.map((p: Post) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      )}

      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          disabled={page <= 1}
          onClick={() => goToPage(page - 1)}
          className="px-3 py-1 border rounded border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed "
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => {
          const p = i + 1;
          return (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`px-3 py-1 border rounded border-gray-300 dark:border-gray-600  ${
                p === page
                  ? 'bg-blue-600 dark:bg-blue-700 text-white border-blue-600 dark:border-blue-700'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {p}
            </button>
          );
        })}

        <button
          disabled={page >= totalPages}
          onClick={() => goToPage(page + 1)}
          className="px-3 py-1 border rounded border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostListPage;
