import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyLandingPage = lazy(() => import('../pages/home/LandingPage'));
const LazyHomeLayout = lazy(() => import('../layout/HomeLayout'));
const LazyDashboardPage = lazy(
  () => import('../pages/admin/dashboard/DashboardPage')
);
const LazyLoginPage = lazy(() => import('../pages/auth/LoginPage'));
const LazyRegisterPage = lazy(() => import('../pages/auth/RegisterPage'));
const LazyRouteNotFoundPage = lazy(() => import('../pages/RouteNotFoundPage'));
const LazyEditPostPage = lazy(
  () => import('../pages/admin/posts/EditPostPage')
);
const LazyPostDetailPage = lazy(
  () => import('../pages/admin/posts/PostDetailPage')
);
const LazyCreatePostPage = lazy(
  () => import('../pages/admin/posts/CreatePostPage')
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyHomeLayout />}>
        <Route index element={<LazyLandingPage />} />
        <Route path="/login" element={<LazyLoginPage />} />
        <Route path="/register" element={<LazyRegisterPage />} />
        <Route path="/admin/dashboard" element={<LazyDashboardPage />} />
        <Route path="/admin/posts/create" element={<LazyCreatePostPage />} />
        <Route path="/admin/posts/:id" element={<LazyPostDetailPage />} />
        <Route path="/admin/posts/:id/edit" element={<LazyEditPostPage />} />
      </Route>
      <Route path="*" element={<LazyRouteNotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
