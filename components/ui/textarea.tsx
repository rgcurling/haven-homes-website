import * as React from 'react';
import { cn } from '@/lib/utils';

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>): JSX.Element {
  return <textarea className={cn('w-full rounded-md border border-accent/40 bg-white px-4 py-3', className)} {...props} />;
}
