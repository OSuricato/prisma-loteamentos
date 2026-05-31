import { useState } from 'react';
import { strings } from '../../i18n/pt-BR';

// lotData será substituído pelos dados reais da planta do loteamento.
const lotData = [
  { id: 1, status: 'available', area: 300 },
  { id: 2, status: 'sold', area: 250 },
  { id: 3, status: 'reserved', area: 280 },
];

export default function InteractivePlot() {
  const { interactivePlot } = strings;
  const [hoveredLot, setHoveredLot] = useState(null);

  const statusLabel = {
    available: interactivePlot.availableLabel,
    sold: interactivePlot.soldLabel,
    reserved: interactivePlot.reservedLabel,
  };

  return (
    <section id="lots">
      <h2>{interactivePlot.heading}</h2>
      <p>{interactivePlot.subheading}</p>

      {/* TODO: substituir por SVG/canvas da planta real */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {lotData.map((lot) => (
          <div
            key={lot.id}
            onMouseEnter={() => setHoveredLot(lot)}
            onMouseLeave={() => setHoveredLot(null)}
            style={{ width: 80, height: 80, background: '#ccc', cursor: 'pointer', position: 'relative' }}
          >
            Lote {lot.id}
          </div>
        ))}
      </div>

      {hoveredLot && (
        <div>
          <p>Lote {hoveredLot.id} — {statusLabel[hoveredLot.status]}</p>
          <p>{interactivePlot.areaLabel}: {hoveredLot.area} {interactivePlot.areaUnit}</p>
        </div>
      )}
    </section>
  );
}
