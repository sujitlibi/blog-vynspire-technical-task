import { useNavigate } from 'react-router-dom';
import { Bug } from 'lucide-react';

const PostNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full text-red-500 bg-gray-100 dark:bg-gray-800 mb-6">
          <Bug size={48} />
        </div>

        {/* Message */}
        {/* API Information */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6 text-left">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            About JSONPlaceholder API
          </h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>Read-only API:</strong> JSONPlaceholder is a fake REST
                API for testing
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>Pre-defined posts only:</strong> Only posts with IDs
                1-100 are available
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>New posts not persisted:</strong> Created posts exist
                only in memory during this session
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>Access existing posts:</strong> You can view and edit
                pre-existing posts (ID 1-100)
              </span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <button
            onClick={() => navigate('/admin/posts')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg duration-200"
          >
            View All Posts
          </button>

          <button
            onClick={() => navigate('/admin/posts/create')}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg "
          >
            Create New Post
          </button>
        </div>

        {/* Quick Access to Existing Posts */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Quick access to pre-existing posts:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((id) => (
              <button
                key={id}
                onClick={() => navigate(`/admin/posts/${id}`)}
                className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Post #{id}
              </button>
            ))}
          </div>
        </div>

        {/* Developer Note */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <strong>Note:</strong> This is a demo application using
            JSONPlaceholder API. In a real application, backend would persist
            all created posts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostNotFound;
