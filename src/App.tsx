import { Suspense } from 'react';
import AppRoutes from './routes/AppRoutes';
import Spinner from './components/ui/Spinner';

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20 dark:bg-gray-700 min-h-screen">
          <Spinner size="xl" className="text-blue-600 dark:text-blue-400" />
        </div>
      }
    >
      <AppRoutes />
    </Suspense>
  );
}

export default App;
