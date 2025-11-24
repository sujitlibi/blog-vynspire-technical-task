import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Dashboard Overview (Note: These are just static data count.)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm  dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Total Posts
          </h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
            12
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm r dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Published
          </h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">
            8
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm  dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Drafts
          </h3>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
            4
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm  dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to your dashboard! Start managing your content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
