import { LayoutDashboard, StickyNote } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  isActive: (path: string) => void;
}

const navItems = [
  {
    path: '/admin/dashboard',
    icon: <LayoutDashboard />,
    label: 'Dashboard',
    mobileIcon: <LayoutDashboard />,
  },
  {
    path: '/admin/posts',
    icon: <StickyNote />,
    label: 'Posts',
    mobileIcon: <StickyNote />,
  },
];

const Sidebar = ({
  setIsSidebarOpen,
  isSidebarOpen,
  isActive,
}: SidebarProps) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Sidebar Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-white dark:bg-gray-800 shadow-sm transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:transition-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          top-16 lg:top-0 min-h-[calc(100vh-4rem)]  dark:border-gray-700
        `}
      >
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => {
                    navigate(item.path);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium  flex items-center group ${isActive(
                    item.path
                  )}`}
                >
                  {/* Icon - always visible */}
                  <span className="text-lg mr-3 shrink-0">{item.icon}</span>
                  {/* Label - hidden on mobile, visible on desktop */}
                  <span className="hidden lg:block">{item.label}</span>
                  {/* Mobile-only label */}
                  <span className="lg:hidden text-sm">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile close hint */}

        <div className="lg:hidden absolute bottom-4 left-4 right-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium "
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
