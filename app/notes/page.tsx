import { fetchNotes } from '@/lib/api';
import Notes from './Notes.client';

export default async function NotesPage() {
  const response = await fetchNotes({ page: 1 });
  console.log(response);
  return (
    <div>
      <Notes notes={response.notes} totalPages={response.totalPages} />
    </div>
  );
}
