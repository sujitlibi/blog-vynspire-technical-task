import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyLandingPage = lazy(() => import('../pages/home/LandingPage'));
const LazyHomeLayout = lazy(() => import('../layout/HomeLayout'));
const LazyDashboardPage = lazy(
  () => import('../pages/dashboard/DashboardPage')
);
const LazyLoginPage = lazy(() => import('../pages/auth/LoginPage'));
const LazyRegisterPage = lazy(() => import('../pages/auth/RegisterPage'));
const LazyRouteNotFoundPage = lazy(() => import('../pages/RouteNotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyHomeLayout />}>
        <Route index element={<LazyLandingPage />} />
        <Route path="/dashboard" element={<LazyDashboardPage />} />
        <Route path="/login" element={<LazyLoginPage />} />
        <Route path="/register" element={<LazyRegisterPage />} />
      </Route>
      <Route path="*" element={<LazyRouteNotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
