'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(20, 'Please share a bit more detail'),
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export async function submitContactForm(values: ContactFormValues): Promise<void> {
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
}

export function ContactForm(): JSX.Element {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '', website: '' },
  });
  return (
    <form onSubmit={form.handleSubmit(submitContactForm)} className="space-y-4 rounded-2xl bg-muted p-8">
      <div>
        <Input placeholder="Full name" aria-label="Name" {...form.register('name')} />
        <p className="mt-1 text-sm text-red-600">{form.formState.errors.name?.message}</p>
      </div>
      <div>
        <Input placeholder="Email address" aria-label="Email" {...form.register('email')} />
        <p className="mt-1 text-sm text-red-600">{form.formState.errors.email?.message}</p>
      </div>
      <div>
        <Textarea rows={6} placeholder="Tell us about your project" aria-label="Message" {...form.register('message')} />
        <p className="mt-1 text-sm text-red-600">{form.formState.errors.message?.message}</p>
      </div>
      <div className="hidden">
        <Input tabIndex={-1} autoComplete="off" {...form.register('website')} />
      </div>
      <Button type="submit">Send Inquiry</Button>
    </form>
  );
}
