import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Notes from "./Notes";
import MainApp from "./MainApp";
import MainNote from "./MainNote";
const initialNotes = [
      {
        id: "1",
        title: "Welcome to Notes App",
        content: "This is your first note. Click on 'Add Note' to create more.",
        lastEdited: new Date().toLocaleString(),
      },
      {
        id: "2",
        title: "How to use",
        content: "Click on a note to edit it. Use the 'Add Note' button to create new notes.",
        lastEdited: new Date().toLocaleString(),
      },
      {
        id: "3",
        title: "Deleting Notes",
        content: "You can delete a note by clicking the delete button on the top right corner of each note.",
        lastEdited: new Date().toLocaleString(),
      },
    ];
export default function App() {
  const existingUser = localStorage.getItem("existingUser");
  if (!existingUser) {
    localStorage.setItem("notes", JSON.stringify(initialNotes));
    localStorage.setItem("existingUser", "true");
  }
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/note/:id" element={<MainNote />} />
      </Routes>
    </BrowserRouter>
  );
}
