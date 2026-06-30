import { Button, Spinner } from '@heroui/react';
import { AuthFormLayout } from '@/core/auth/ui/auth-form-layout';
import { AuthLink } from '@/core/auth/ui/auth-link';
import { type SignInFormValues } from '@/core/auth/schemas/sign-in-schema';
import { ROUTES } from '@/shared/routes';
import { LoaderGate } from '@/shared/components/ui/loader-gate';
import type { UseFormReturn } from 'react-hook-form';
import { AppForm } from '@/shared/components/form/app-form';
import { EmailField } from '@/shared/components/form/email-field';
import { PasswordField } from '@/shared/components/form/password-field';

type SignInFormProps = {
  form: UseFormReturn<SignInFormValues>;
  onSubmit: (values: SignInFormValues) => Promise<void>;
};

export function SignInForm({ form, onSubmit }: SignInFormProps) {
  return (
    <AuthFormLayout
      title="Войти в систему"
      description="Добро пожаловать обратно! Пожалуйста, введите свои данные для входа."
    >
      <AppForm form={form} onSubmit={onSubmit} className="flex flex-col gap-4">
        {({ register, formState: { errors, isSubmitting } }) => (
          <>
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

            <Button type="submit" isDisabled={isSubmitting} className="w-full">
              <LoaderGate
                isLoading={isSubmitting}
                loaderSlot={
                  <>
                    <Spinner color="current" />
                    Вход...
                  </>
                }
              >
                Войти
              </LoaderGate>
            </Button>
          </>
        )}
      </AppForm>

      <AuthLink
        text="Ещё нет аккаунта?"
        linkText="Зарегистрироваться"
        href={ROUTES.AUTH.SIGN_UP.path}
      />
    </AuthFormLayout>
  );
}
