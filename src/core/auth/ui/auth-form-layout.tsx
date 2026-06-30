import { Card, Typography } from '@heroui/react';
import type { ReactNode } from 'react';

type AuthFormLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function AuthFormLayout({ title, description, children }: AuthFormLayoutProps) {
  return (
    <Card className="flex w-full max-w-lg flex-col gap-6 rounded-3xl p-6 shadow-lg md:p-8">
      <div className="flex flex-col gap-1.5">
        <Typography type="h3" className="tracking-tight">
          {title}
        </Typography>

        <Typography type="body" className="text-default-foreground/75 text-sm">
          {description}
        </Typography>
      </div>

      {children}
    </Card>
  );
}
