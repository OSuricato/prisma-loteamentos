import { strings } from '../../i18n/pt-BR';

export default function Navbar() {
  const { nav } = strings;
  return (
    <nav>
      <ul>
        {Object.entries(nav).map(([key, label]) => (
          <li key={key}>
            <a href={`#${key}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
