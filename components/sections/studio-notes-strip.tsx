import { studioNotes } from '@/data/studioNotes';

function renderNotes(): JSX.Element[] {
  const notes: JSX.Element[] = [];
  for (const note of studioNotes) {
    notes.push(<span key={note} className="mx-10 text-sm uppercase tracking-[0.2em]">{note}</span>);
  }
  return notes;
}

export function StudioNotesStrip(): JSX.Element {
  return (
    <section className="overflow-hidden border-y border-accent/20 bg-muted/70 py-4">
      <div className="animate-[marquee_40s_linear_infinite] whitespace-nowrap">{renderNotes()}</div>
    </section>
  );
}
