import React, { useMemo } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import Button from '../../ui/Button';

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
      <InputField
        label={'Title'}
        register={register}
        isSubmitting={isSubmitting}
        id="title"
        placeholder="Enter post title"
        errors={errors}
        fieldName="title"
      />

      {/* Body Field with Textarea */}
      <TextAreaField
        fieldName="body"
        id={'body'}
        label={'Content'}
        register={register}
        isSubmitting={isSubmitting}
        placeholder="Write your post content..."
        characterCount={characterCount}
        errors={errors}
      />

      {/* Submit Button */}
      <Button isSubmitting={isSubmitting} type="submit" />
    </form>
  );
};

export default React.memo(PostFormInner);
