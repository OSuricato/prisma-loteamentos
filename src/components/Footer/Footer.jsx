import { strings } from '../../i18n/pt-BR';

export default function Footer() {
  const { footer, contact } = strings;
  const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(contact.whatsappMessage)}`;

  return (
    <>
      {/* Botão WhatsApp fixo — sempre visível */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={footer.whatsappCta}
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999 }}
      >
        {footer.whatsappCta}
      </a>

      <footer>
        <p>{footer.company}</p>
        <p>{footer.tagline}</p>
        <p>{footer.rights}</p>
      </footer>
    </>
  );
}
