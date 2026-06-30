import { InputField } from './input-field';
import type { FormUIProps } from './types';

export function EmailField(props: FormUIProps<'input'>) {
  return <InputField type="email" {...props} />;
}
