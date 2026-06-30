import { useZodForm } from '@/shared/hooks/use-zod-form';
import { SignUpForm } from './components/sign-up-form';
import { signUpSchema, type SignUpFormValues } from '@/core/auth';

export function SignUpPage() {
  const form = useZodForm<SignUpFormValues>(signUpSchema, {
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    console.log('Sign Up Data:', data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <SignUpForm form={form} onSubmit={onSubmit} />
    </div>
  );
}
