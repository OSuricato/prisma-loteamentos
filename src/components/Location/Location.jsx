import { strings } from '../../i18n/pt-BR';

export default function Location() {
  const { location } = strings;
  return (
    <section id="location">
      <h2>{location.heading}</h2>
      <p>{location.address}</p>
      <p>{location.directions}</p>
      {/* TODO: integrar Google Maps embed */}
      <div style={{ background: '#eee', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Mapa — a integrar
      </div>
      <a href="#" target="_blank" rel="noopener noreferrer">{location.mapCta}</a>
    </section>
  );
}
