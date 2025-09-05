import React, { useState } from 'react';
import { CONTACT_DETAILS } from '../constants';


const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.387 1.876 6.269l.16.278-1.004 3.655 3.732-1.001.287.174z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.281-.072 1.689-.072 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
  </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-brand-primary dark:text-gray-100 mb-2">
          Orders & Inquiries
        </h2>
        <div className="w-24 h-1 bg-brand-secondary mx-auto mb-8 sm:mb-12"></div>

        <div className="max-w-md mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center group p-3 sm:p-4 rounded-lg hover:bg-white/60 dark:hover:bg-gray-700 transition-colors duration-300">
              <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-green-500 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors duration-300 block text-sm sm:text-base">WhatsApp</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{CONTACT_DETAILS.whatsappDisplay}</p>
              </div>
            </a>

            <a href="mailto:shenqalam@gmail.com" className="flex items-center group p-3 sm:p-4 rounded-lg hover:bg-white/60 dark:hover:bg-gray-700 transition-colors duration-300">
              <MailIcon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors duration-300 block text-sm sm:text-base">Email</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">shenqalam@gmail.com</p>
              </div>
            </a>

            <a href={CONTACT_DETAILS.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center group p-3 sm:p-4 rounded-lg hover:bg-white/60 dark:hover:bg-gray-700 transition-colors duration-300">
              <InstagramIcon className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors duration-300 block text-sm sm:text-base">Instagram</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">@{CONTACT_DETAILS.instagram}</p>
              </div>
            </a>
          </div>

          {/* Contact note */}
          <div className="mt-8 sm:mt-10">
            <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 dark:from-brand-primary/10 dark:to-brand-secondary/10 border-l-4 border-brand-primary p-3 sm:p-4 rounded-r-lg">
              <p className="text-brand-primary dark:text-brand-accent font-semibold text-center text-sm sm:text-base">
                📦 Packed with care - fees may vary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;