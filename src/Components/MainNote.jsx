import { ArrowLeftIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MainNote() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [lastEdited, setLastEdited] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const note = notes.find((n) => n.id === id);
    if (note) {
      setFormData({
        title: note.title,
        content: note.content,
      });
      setLastEdited(note.lastEdited);
    }
    else{
        navigate('/');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const now = new Date().toLocaleString();
    setLastEdited(now);
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((n) =>
      n.id === id ? { ...n, [name]: value, lastEdited: now } : n
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleDelete = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    navigate(-1);
  };

  return (
    <div className="bg-white p-6 mt-10 rounded-xl md:border border-gray-300 shadow-sm max-w-3xl mx-auto relative">
      <ArrowLeftIcon
        className=" absolute -top-8 left-4  cursor-pointer bg-light hover:bg-dark hover:text-white trasition-all duration-300 rounded-full "
        onClick={() => navigate(-1)}
      />
      <button
        onClick={handleDelete}
        className=" text-muted hover:bg-red-500 hover:text-white p-2 absolute right-0 top-0 rounded-tr-xl cursor-pointer"
      >
        <X size={16} />
      </button>
      <input
        onChange={handleChange}
        name="title"
        value={formData.title}
        placeholder="Note Title..."
        className="border-none outline-none text-2xl font-bold mb-4 w-full"
      />

      <textarea
        onChange={handleChange}
        name="content"
        value={formData.content}
        placeholder="Write your note here..."
        className="w-full outline-none border-none resize-none h-80"
        
      />

      {lastEdited && (
        <div className="text-xs text-muted absolute bottom-2 right-4 italic">
          Last edited: {lastEdited}
        </div>
      )}
    </div>
  );
}

export default MainNote;
