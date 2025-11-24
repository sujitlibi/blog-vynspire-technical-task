import React, { useState } from 'react';

import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/auth/useAuth';
import Navbar from '../components/shared/admin/navbar/Navbar';
import Sidebar from '../components/shared/admin/sidebar/Sidebar';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-r-2 border-blue-600 dark:border-blue-400'
      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <Navbar toggleSidebar={toggleSidebar} handleLogout={handleLogout} />

      <div className="flex pt-16">
        <Sidebar
          isActive={isActive}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 min-w-0 bg-gray-50 dark:bg-gray-900">
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
