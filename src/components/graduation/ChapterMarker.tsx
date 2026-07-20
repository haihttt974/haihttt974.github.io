import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ChapterMarkerProps {
  number: string;
  label: string;
  action?: { href: string; label: string };
}

export function ChapterMarker({ number, label, action }: ChapterMarkerProps) {
  return (
    <aside id={number} className="grad-chapter-marker" aria-label={`Chương ${number}: ${label}`}>
      <span className="grad-chapter-marker-kicker">CHAPTER</span>
      <strong aria-hidden="true">{number}</strong>
      <span className="grad-chapter-marker-rule" aria-hidden="true"><i /><i /></span>
      <small>{label}</small>
      <span className="grad-chapter-marker-year" aria-hidden="true">MMXXVI</span>
      {action && <Link className="grad-chapter-marker-action" to={action.href}>{action.label}<ArrowUpRight aria-hidden="true" /></Link>}
    </aside>
  );
}
