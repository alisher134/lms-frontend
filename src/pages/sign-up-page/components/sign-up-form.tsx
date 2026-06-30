import { Button, Spinner } from '@heroui/react';
import { type SignUpFormValues, AuthFormLayout, AuthLink } from '@/core/auth';
import { ROUTES } from '@/shared/routes';
import { LoaderGate } from '@/shared/components/ui/loader-gate';
import { AppForm } from '@/shared/components/form/app-form';
import type { UseFormReturn } from 'react-hook-form';
import { InputField } from '@/shared/components/form/input-field';
import { EmailField } from '@/shared/components/form/email-field';
import { PasswordField } from '@/shared/components/form/password-field';

type SignUpFormProps = {
  form: UseFormReturn<SignUpFormValues>;
  onSubmit: (values: SignUpFormValues) => Promise<void>;
};

export function SignUpForm({ form, onSubmit }: SignUpFormProps) {
  return (
    <AuthFormLayout
      title="Регистрация"
      description="Заполните форму, чтобы создать аккаунт и начать обучение."
    >
      <AppForm form={form} onSubmit={onSubmit} className="flex flex-col gap-4">
        {({ register, formState: { errors, isSubmitting } }) => (
          <>
            <div className="flex flex-col gap-4 md:flex-row">
              <InputField
                label="Имя"
                placeholder="Иван"
                error={errors?.firstName?.message}
                {...register('firstName')}
                className="w-full"
              />

              <InputField
                label="Фамилия"
                placeholder="Иванов"
                error={errors?.lastName?.message}
                {...register('lastName')}
                className="w-full"
              />
            </div>

            <EmailField
              label="Email"
              placeholder="example@domain.com"
              error={errors?.email?.message}
              {...register('email')}
            />

            <PasswordField
              label="Пароль"
              placeholder="********"
              error={errors?.password?.message}
              {...register('password')}
            />

            <PasswordField
              label="Подтвердите пароль"
              placeholder="********"
              error={errors?.confirmPassword?.message}
              {...register('confirmPassword')}
            />

            <Button type="submit" isDisabled={isSubmitting} className="w-full">
              <LoaderGate
                isLoading={isSubmitting}
                loaderSlot={
                  <>
                    <Spinner color="current" />
                    Регистрация...
                  </>
                }
              >
                Зарегистрироваться
              </LoaderGate>
            </Button>
          </>
        )}
      </AppForm>

      <AuthLink text="Уже зарегистрированы?" linkText="Войти" href={ROUTES.AUTH.SIGN_IN.path} />
    </AuthFormLayout>
  );
}
