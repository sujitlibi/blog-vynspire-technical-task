import { Link } from 'react-router-dom';

const RouteNotFoundPage: React.FC = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl mb-4">404 - Route Not Found</h2>
      <Link to="/" className="text-blue-600">
        Go Back
      </Link>
    </div>
  );
};

export default RouteNotFoundPage;
