// import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';

// const LandingPage: React.FC = () => {
//   return (
//     <div className="text-center py-20">
//       <h1 className="text-4xl font-bold mb-4">Vynspire Technical Blog</h1>
//       <p className="mb-6">
//         A technical task to create simple blog platform implemented with React
//       </p>
//       <div className="flex justify-center gap-4">
//         <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded">
//           Login
//         </Link>
//         <Link to="/register" className="px-4 py-2 border rounded">
//           Register
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Trusted by section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Trusted by 10,000+ Writers
          </p>
        </div>

        {/* Main hero content */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Write <span className="text-blue-600">Smarter.</span>
            <br />
            Publish <span className="text-blue-600">Faster.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A technical task to create simple blog platform implemented with
            React
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              Start Writing! Free
            </Link>
            <Link
              to="/register"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              See How it Works
            </Link>
          </div>

          {/* Company logos */}
          <div className="mt-16">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-8">
              Trusted by Writers At
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {['STARSURE', 'webflow', 'Google', 'Framer', 'Forbes'].map(
                (company) => (
                  <div
                    key={company}
                    className="text-gray-700 dark:text-gray-300 text-lg font-semibold hover:opacity-100 transition-opacity duration-200"
                  >
                    {company}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
