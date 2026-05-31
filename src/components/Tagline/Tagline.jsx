import { strings } from '../../i18n/pt-BR';

export default function Tagline() {
  return (
    <section>
      <blockquote>{strings.tagline.text}</blockquote>
    </section>
  );
}
