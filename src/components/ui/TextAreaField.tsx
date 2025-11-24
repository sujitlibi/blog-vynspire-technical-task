import type {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';

interface TextAreaField<T extends FieldValues> {
  id: string;
  characterCount: number;
  placeholder: string;
  register: UseFormRegister<T>;
  isSubmitting: boolean;
  errors: {
    body?: FieldError;
  };
  label: string;
  fieldName: Path<T>; // Add this to make it reusable for different fields
}

const TextAreaField = <T extends FieldValues>({
  id,
  register,
  isSubmitting,
  characterCount,
  errors,
  label,
  fieldName,
  placeholder,
}: TextAreaField<T>) => {
  return (
    <div>
      <label
        htmlFor={fieldName}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label} *
      </label>
      <textarea
        {...register(fieldName)}
        id={id}
        rows={12}
        placeholder={placeholder}
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
  );
};

export default TextAreaField;
