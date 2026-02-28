import { Resend } from 'resend';

type ContactEmailInput = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(input: ContactEmailInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return;
  }
  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to,
    subject: `New Haven Homes inquiry from ${input.name}`,
    text: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
  });
}
