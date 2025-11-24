import type {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  id: string;
  placeholder: string;
  register: UseFormRegister<T>;
  isSubmitting: boolean;
  errors: {
    title?: FieldError;
  };
  label: string;
  fieldName: Path<T>; // Add this to make it reusable for different fields
}

const InputField = <T extends FieldValues>({
  id,
  placeholder,
  register,
  isSubmitting,
  errors,
  label,
  fieldName,
}: InputFieldProps<T>) => {
  return (
    <div>
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label} *
      </label>
      <input
        {...register(fieldName)}
        id={id}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        disabled={isSubmitting}
      />
      {errors.title && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {errors.title.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
