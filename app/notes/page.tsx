import { fetchNotes } from '@/lib/api';
import Notes from './Notes.client';

export default async function NotesPage() {
  const response = await fetchNotes({ page: 1 });
  return (
    <Notes initialNotes={response.notes} totalPages={response.totalPages} />
  );
}
