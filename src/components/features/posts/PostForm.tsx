import React, { useMemo } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  body: yup
    .string()
    .required('Body is required')
    .min(10, 'Body must be at least 10 characters'),
});

type FormValues = { title: string; body: string };

type Props = {
  initial?: { title: string; body: string };
  onSubmit: (data: FormValues) => Promise<void> | void;
};

const PostFormInner: React.FC<Props> = ({
  initial = { title: '', body: '' },
  onSubmit,
}) => {
  const defaultValues = useMemo(() => initial, [initial]);

  const { register, handleSubmit, formState, setFocus, watch } =
    useForm<FormValues>({
      resolver: yupResolver(schema),
      defaultValues,
    });

  const { errors, isSubmitting } = formState;
  const bodyValue = watch('body');
  const characterCount = bodyValue?.length || 0;

  React.useEffect(() => {
    setFocus('title');
  }, [setFocus]);

  const submitHandler: SubmitHandler<FormValues> = async (values) => {
    await onSubmit(values);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6"
      noValidate
    >
      {/* Title Field */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Title *
        </label>
        <input
          {...register('title')}
          id="title"
          placeholder="Enter post title"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          disabled={isSubmitting}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Body Field with Textarea */}
      <div>
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Content *
        </label>
        <textarea
          {...register('body')}
          id="body"
          rows={12}
          placeholder="Write your post content..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 resize-vertical bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          disabled={isSubmitting}
        />
        <div className="flex justify-between mt-1">
          {errors.body ? (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errors.body.message}
            </p>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Minimum 10 characters required
            </p>
          )}
          <p
            className={`text-sm ${
              characterCount < 10
                ? 'text-red-600 dark:text-red-400'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            {characterCount} characters
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Publishing...
            </span>
          ) : (
            'Publish Post'
          )}
        </button>
      </div>
    </form>
  );
};

export default React.memo(PostFormInner);
