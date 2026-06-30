import { FieldError, Label, TextField } from '@heroui/react';
import type { FormUIProps } from './types';
import { useId } from 'react';
import { PasswordInput } from '../ui/password-input';

export function PasswordField({ error, label, ...props }: Omit<FormUIProps<'input'>, 'type'>) {
  const id = useId();

  return (
    <TextField isInvalid={!!error}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <PasswordInput id={id} {...props} />
      {error && <FieldError>{error}</FieldError>}
    </TextField>
  );
}
