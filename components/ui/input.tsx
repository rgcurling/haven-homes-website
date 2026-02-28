import * as React from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return <input className={cn('w-full rounded-md border border-accent/40 bg-white px-4 py-3', className)} {...props} />;
}
