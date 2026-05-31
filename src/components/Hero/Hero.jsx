import { strings } from '../../i18n/pt-BR';

export default function Hero() {
  const { hero } = strings;
  return (
    <section id="home">
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      <a href="#interestForm">{hero.cta}</a>
    </section>
  );
}
