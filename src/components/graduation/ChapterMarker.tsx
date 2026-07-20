interface ChapterMarkerProps {
  number: string;
  label: string;
}

export function ChapterMarker({ number, label }: ChapterMarkerProps) {
  return (
    <aside className="grad-chapter-marker" aria-label={`Chương ${number}: ${label}`}>
      <span className="grad-chapter-marker-kicker">CHAPTER</span>
      <strong aria-hidden="true">{number}</strong>
      <span className="grad-chapter-marker-rule" aria-hidden="true"><i /><i /></span>
      <small>{label}</small>
      <span className="grad-chapter-marker-year" aria-hidden="true">MMXXVI</span>
    </aside>
  );
}
