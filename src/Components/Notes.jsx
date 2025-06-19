import Note from './Note.jsx';
import { useEffect, useState } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')).filter(note=> note.title!='' || note.content!='') || [];
    localStorage.setItem('notes', JSON.stringify(storedNotes));
    setNotes(storedNotes);
  }, []);

  function handleDeleteNote(id) {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  }

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-3 mt-6">
      {notes.length!=0?notes.map(note => (
        <Note key={note.id} {...note} onDelete={() => handleDeleteNote(note.id)} />
      )):(
        <p className='text-muted'>
            No notes available. 
        </p>
      )}
    </div>
  );
}

export default Notes;
