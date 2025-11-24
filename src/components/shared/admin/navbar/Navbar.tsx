import { ListCollapse, LogOut, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../../context/ThemeContext';

type NavbarProps = {
  toggleSidebar: () => void;
  handleLogout: () => void;
};

const Navbar = ({ toggleSidebar, handleLogout }: NavbarProps) => {
  const { theme, themeToggle } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm  dark:border-gray-700 fixed w-full top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and mobile menu button */}

          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <ListCollapse />
            </button>
            <div className="shrink-0 flex items-center ml-4 lg:ml-0">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Admin Panel
              </h1>
            </div>
          </div>

          {/* Right side - Dark mode toogle and logout */}
          <div className="flex items-center space-x-4">
            <button
              onClick={themeToggle}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Sun /> : <Moon />}
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium  flex items-center"
            >
              <LogOut />
              {/* <span className="hidden sm:inline">Logout</span> */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
