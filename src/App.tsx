import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/home/LandingPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomeLayout from './layout/HomeLayout';
import RouteNotFoundPage from './pages/RouteNotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<RouteNotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
