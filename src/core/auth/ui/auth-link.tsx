import { cn, Typography } from '@heroui/react';
import { Link } from 'react-router';

type AuthLinkProps = {
  text: string;
  linkText: string;
  href: string;
  className?: string;
};

export function AuthLink({ text, linkText, href, className }: AuthLinkProps) {
  return (
    <Typography type="body-sm" className={cn('text-center', className)}>
      {text}{' '}
      <Link to={href} className="text-accent hover:text-accent/80 underline">
        {linkText}
      </Link>
    </Typography>
  );
}
