import { EyeIcon, EyeClosedIcon } from 'lucide-react';
import { Button, InputGroup, type InputGroupInputProps } from '@heroui/react';
import { useState } from 'react';

export function PasswordInput({ ...props }: InputGroupInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InputGroup>
      <InputGroup.Input className="w-full" type={isVisible ? 'text' : 'password'} {...props} />
      <InputGroup.Suffix className="pr-0">
        <Button
          isIconOnly
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          size="sm"
          variant="ghost"
          onPress={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <EyeIcon className="size-4" /> : <EyeClosedIcon className="size-4" />}
        </Button>
      </InputGroup.Suffix>
    </InputGroup>
  );
}
