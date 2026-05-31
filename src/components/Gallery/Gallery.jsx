import { strings } from '../../i18n/pt-BR';

// photos será substituído pelas imagens reais do loteamento.
const photos = [];

export default function Gallery() {
  const { gallery } = strings;
  return (
    <section id="gallery">
      <h2>{gallery.heading}</h2>
      {photos.length === 0 ? (
        <p>Fotos em breve.</p>
      ) : (
        <div>
          {photos.map((src, i) => (
            <img key={i} src={src} alt={`${gallery.altPrefix} ${i + 1}`} />
          ))}
        </div>
      )}
    </section>
  );
}
