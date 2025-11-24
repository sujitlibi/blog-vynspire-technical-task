import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';

const LazyHomeLayout = lazy(() => import('../layout/HomeLayout'));
const LazyAdminDashboardLayout = lazy(
  () => import('../layout/AdminDashboardLayout')
);
const LazyLandingPage = lazy(() => import('../pages/home/LandingPage'));
const LazyDashboardPage = lazy(
  () => import('../pages/admin/dashboard/DashboardPage')
);
const LazyLoginPage = lazy(() => import('../pages/auth/LoginPage'));
const LazyRegisterPage = lazy(() => import('../pages/auth/RegisterPage'));
const LazyRouteNotFoundPage = lazy(() => import('../pages/RouteNotFoundPage'));
const LazyPostListPage = lazy(
  () => import('../pages/admin/posts/PostListPage')
);
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
      {/** Public Routes Goes here not authentication required */}
      <Route path="/" element={<LazyHomeLayout />}>
        <Route index element={<LazyLandingPage />} />
        <Route path="/login" element={<LazyLoginPage />} />
        <Route path="/register" element={<LazyRegisterPage />} />
      </Route>

      {/** Protected Routes Goes here authentication required */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <LazyAdminDashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index path="dashboard" element={<LazyDashboardPage />} />
        <Route path="posts" element={<LazyPostListPage />} />
        <Route path="posts/create" element={<LazyCreatePostPage />} />
        <Route path="posts/:id/edit" element={<LazyEditPostPage />} />
        <Route path="posts/:id" element={<LazyPostDetailPage />} />
      </Route>
      <Route path="*" element={<LazyRouteNotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
