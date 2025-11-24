import React from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../../../api/posts/hooks/usePost';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import PostNotFound from '../../../components/features/posts/PostNotFound';
import Spinner from '../../../components/ui/Spinner';

/**
 * Post Detail displays full content of a single post.
 */

const PostDetailPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { data: post, isLoading } = usePost(id);

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20">
        <Spinner size="xl" className="text-blue-600 dark:text-blue-400" />
      </div>
    );
  if (!post) return <PostNotFound />;

  return (
    <div className=" px-4 shadow-sm bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-8">
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
              'A'
            </div>
          </div>

          {/* Author and Date */}
          <div className="flex-1 min-w-0">
            <p className="text-lg font-medium text-gray-900 dark:text-white truncate">
              Anonymous Author
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>
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
              <button className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-400 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 ">
                <Linkedin />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-400 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 ">
                <Facebook />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-400 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 ">
                <Instagram />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
