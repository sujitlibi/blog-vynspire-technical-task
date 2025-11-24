const footerContent = ['Login', 'Register', 'Credit', 'Home'];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Vynspire
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Technical Blog
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerContent.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Vynspire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
