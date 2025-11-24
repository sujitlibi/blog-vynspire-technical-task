import Spinner from './Spinner';

interface ButtonProps {
  isSubmitting: boolean;
  type: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

const Button = ({ isSubmitting, type, children }: ButtonProps) => {
  return (
    <div className="flex justify-end pt-4">
      <button
        type={type}
        disabled={isSubmitting}
        className="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <Spinner />
            Publishing...
          </span>
        ) : (
          children || 'Publish Post'
        )}
      </button>
    </div>
  );
};

export default Button;
