import { strings } from '../../i18n/pt-BR';

export default function Contact() {
  const { contact } = strings;
  const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(contact.whatsappMessage)}`;

  return (
    <section id="contact">
      <h2>{contact.heading}</h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        {contact.whatsappLabel}
      </a>
    </section>
  );
}
