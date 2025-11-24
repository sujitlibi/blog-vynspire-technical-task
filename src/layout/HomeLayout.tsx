// Home Layout.js
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/footer/Footer';

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
