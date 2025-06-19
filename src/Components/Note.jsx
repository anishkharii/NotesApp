import { X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Note({ id, title, content, onDelete }) {
  const navigate = useNavigate();
  const [showBtn, setShowBtn] = useState(false);
  return (
    <div
      className=" break-inside-avoid relative bg-white border border-border hover:border-primary cursor-pointer transition-all duration-300 rounded-xl shadow-sm p-4 w-full"
      onClick={() => navigate(`/note/${id}`)}
        onMouseEnter={() => setShowBtn(true)}
        onMouseLeave={() => setShowBtn(false)}
    >
    {
        showBtn &&
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className=" text-muted hover:bg-red-500 hover:text-white p-2 absolute right-0 top-0 rounded-tr-xl cursor-pointer"
      >
        <X size={16} />
      </button>
    }
      {title && <h2 className="text-lg line-clamp-3 font-semibold text-primary mb-2">{title}</h2>}
      <p className="text-sm line-clamp-6 whitespace-pre-wrap">{content}</p>
    </div>
  );
}

export default Note;