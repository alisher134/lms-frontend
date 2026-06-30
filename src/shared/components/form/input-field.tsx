import { FieldError, Input, Label, TextField } from '@heroui/react';
import type { FormUIProps } from './types';
import { useId } from 'react';

export function InputField({ error, label, className, ...props }: FormUIProps<'input'>) {
  const id = useId();

  return (
    <TextField isInvalid={!!error} className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} {...props} />
      {error && <FieldError>{error}</FieldError>}
    </TextField>
  );
}
