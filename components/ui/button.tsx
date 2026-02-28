import * as React from 'react';
import { cn } from '@/lib/utils';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
};

export function Button({ className, variant = 'default', ...props }: ButtonProps): JSX.Element {
  const classes =
    variant === 'default'
      ? 'bg-foreground text-background hover:bg-foreground/90'
      : 'border border-foreground bg-transparent hover:bg-foreground/10';
  return (
    <button
      className={cn('inline-flex items-center justify-center rounded-full px-5 py-2 text-sm', classes, className)}
      {...props}
    />
  );
}
