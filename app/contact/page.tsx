import { ContactForm } from '@/components/forms/contact-form';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata('Contact | Haven Homes Interiors', 'Start your interior design project with Haven Homes Interiors.', '/contact');

export default function ContactPage(): JSX.Element {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
      <div className="space-y-4">
        <h1 className="font-serif text-5xl">Let’s design your next chapter.</h1>
        <p className="text-foreground/75">Share your goals, timeline, and location. We’ll follow up with availability and next steps.</p>
        <div className="rounded-2xl border border-accent/20 p-5">
          <p className="text-sm uppercase tracking-[0.18em] text-accent">Availability</p>
          <p className="mt-2">Now booking late-summer 2026 starts.</p>
          <button className="mt-4 rounded-full border border-foreground px-4 py-2">Scheduler (Coming Soon)</button>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
