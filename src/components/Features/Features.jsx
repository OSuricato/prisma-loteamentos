import { strings } from '../../i18n/pt-BR';

export default function Features() {
  const { features } = strings;
  return (
    <section id="features">
      <h2>{features.heading}</h2>
      <ul>
        {features.items.map((item, i) => (
          <li key={i}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
