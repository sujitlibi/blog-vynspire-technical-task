// Home Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/home/navbar/Navbar';
import Footer from '../components/shared/home/footer/Footer';

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
