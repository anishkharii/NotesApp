
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';

function MainApp() {
  const navigate = useNavigate();

  function handleAddNote() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = {
      id: Date.now().toString(),
      title: '',
      content: '',
      lastEdited: new Date().toLocaleString(),
    };
    notes.unshift(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
    navigate(`/note/${newNote.id}`);
  }

  return (
    <div className="min-h-screen bg-background px-6 py-8 font-sans">
      <button
        onClick={handleAddNote}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-all duration-300 cursor-pointer"
      >
        Add Note
      </button>
      <Notes />
    </div>
  );
}

export default MainApp;