import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../hooks/auth/useAuth';

/**
 * Register page:
 * - Similar to login; uses RHF + Yup.
 * - On success navigates to dashboard.
 */

type FormValues = { name: string; email: string; password: string };

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 chars')
    .required('Password is required'),
});

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/admin/dashboard');
    }
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await registerUser(data.name, data.email, data.password);
      navigate('/admin/dashboard');
    } catch {
      alert('Registration failed');
    }
  };
  return (
    <div className=" bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Register
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Hi, New Author
            </p>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                required
                placeholder="E.g. Sujit Kumar Libi"
                {...register('name')}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm "
              />

              {errors.name && (
                <p className="text-sm text-red-400">{errors.name?.message}</p>
              )}
            </div>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="E.g. sujit@demo.com"
                {...register('email')}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm "
              />

              {errors.email && (
                <p className="text-sm text-red-400">{errors.email?.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                placeholder="Enter your password"
                {...register('password')}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm "
              />

              {errors.password && (
                <p className="text-sm text-red-400">
                  {errors.password?.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 "
              >
                Register
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Already have account?{' '}
                <Link
                  to="/login"
                  // onClick={onSwitchToRegister}
                  className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 "
                >
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
