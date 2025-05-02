import { Metadata } from 'next';
import { ContactPage } from '@/components/ContactPage';

export const metadata: Metadata = {
  title: {
    template: '%s | Get in Touch with Us',
    default: 'Get in Touch with Us',
  },
  description: 'Ready to work with Some Company? Fill out our contact form to get started.',
};

export default function ContactUs() {
  return <ContactPage />;
}
