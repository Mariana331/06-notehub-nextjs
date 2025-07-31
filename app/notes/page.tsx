import { fetchNotes } from '@/lib/api';
import Notes from './Notes.client';

export default async function NotesPage() {
  const response = await fetchNotes({ page: 1 });
  console.log(response);
  return <Notes />;
}
