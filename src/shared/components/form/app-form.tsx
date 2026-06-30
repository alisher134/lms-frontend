import type { ReactNode } from 'react';
import { FormProvider, type FieldValues, type UseFormReturn } from 'react-hook-form';

export const AppForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
>({
  children,
  form,
  className,
  onSubmit,
}: {
  children: (form: UseFormReturn<TFieldValues, TContext, TTransformedValues>) => ReactNode;
  onSubmit: (values: TTransformedValues) => void | Promise<void>;
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
  className?: string;
}) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {children(form)}
      </form>
    </FormProvider>
  );
};
