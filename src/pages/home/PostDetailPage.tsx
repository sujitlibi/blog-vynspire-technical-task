import React from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../../api/posts/hooks/usePost';

/**
 * PostDetail displays full content of a single post.
 * - The body may contain sanitized HTML (from React-Quill); do not dangerouslySetInnerHTML unless sanitized.
 */
const HomePostDetailPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { data: post, isLoading } = usePost(id);

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Blog Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              {/* {post?.author?.charAt(0) || 'A'} 'A' */} 'A'
            </div>
          </div>

          {/* Author and Date */}
          <div className="flex-1 min-w-0">
            <p className="text-lg font-medium text-gray-900 dark:text-white truncate">
              {/* {post?.author || 'Anonymous Author'}  */}Anonymous Author
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>
                {/* {new Date(post.createdAt || Date.now()).toLocaleDateString(
                  'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )} */}
                {new Date(Date.now()).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image - Optional */}
        {/* {post?.featuredImage && (
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
        />
      </div>
    )} */}
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div
          className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>

      {/* Blog Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
              >
                #{tag}
              </span>
            )) || (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full font-medium">
                #blog
              </span>
            )}
          </div>

          {/* Social Sharing */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Share:
            </span>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-sm">📱</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-sm">🐦</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-sm">💼</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Author Bio Section */}
      <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="shrink-0">
            <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xl">
              {/* {post.author?.charAt(0) || 'A'} */} {'A'}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {/* About {post.author || 'the Author'}  */} About the Author
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {/* {post.authorBio || 'Passionate writer sharing insights and experiences. Lover of technology, design, and good stories.'} */}
              'Passionate writer sharing insights and experiences. Lover of
              technology, design, and good stories.'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePostDetailPage;
