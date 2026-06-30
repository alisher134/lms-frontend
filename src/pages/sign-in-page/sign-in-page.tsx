import { useZodForm } from '@/shared/hooks/use-zod-form';
import { SignInForm } from './components/sign-in-form';
import { signInSchema, type SignInFormValues } from '@/core/auth';

export function SignInPage() {
  const form = useZodForm(signInSchema, {
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: SignInFormValues) => {
    console.log(values);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <SignInForm form={form} onSubmit={onSubmit} />
    </div>
  );
}
