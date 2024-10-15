import { useState } from "react";

function Home() {
  // Array to simulate notes for simplicity, you can map actual frets to notes here.
  const notes = ["E", "A", "D", "G", "B", "e"]; // Example string names

  // State to store the clicked note
  const [selectedNote, setSelectedNote] = useState("");

  // Function to handle image click and set the selected note
  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  return (
    <div>
      <div className="bg-[#6aa2cc] text-3xl px-20 py-20 text-center font-bold">
        Welcome
        <div style={{ display: "flex", justifyContent: "center", gap: "0px" }}>
          {notes.map((note, index) => (
            <img
              key={index}
              src="fret.gif"
              alt={`fret ${note}`}
              width="400"
              onClick={() => handleNoteClick(note)} // Trigger note display on click
              style={{ cursor: "pointer" }} // Change cursor to pointer to show it's clickable
            />
          ))}
        </div>
        <div className="text-2xl mt-10">
          {selectedNote && <p>Selected Note: {selectedNote}</p>}{" "}
          {/* Display clicked note */}
        </div>
      </div>
    </div>
  );
}

export default Home;
