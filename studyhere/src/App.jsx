import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import StudySpaceCard from "./components/StudySpaceCard";

function App() {
  const [selectedSpace, setSelectedSpace] = useState(null);

  const handleReserve = (spaceName) => {
    setSelectedSpace(spaceName);

    setTimeout(() => {
      setSelectedSpace(null);
    }, 2000);
  };

  

  const studySpaces = [
    {
      name: "Library Reading Room",
      description: "Quiet space with natural light and large tables.",
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      loc: [
        "Lydon Library",
        "O'Leary Library"
      ],
    },
    {
      name: "Campus Café",
      description: "Relaxed vibe with coffee, snacks, and outlets.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      loc: [
        "Dorm Building Cafeteria",
        "Cumnock Hall",
        "University Crossing",
        "South Dining"
      ],

    },
    {
      name: "Outdoor Courtyard",
      description: "Fresh air, sunshine, and shaded benches.",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      loc: [
        "South Campus",
        "North Campus",
        "East Campus"
      ],
    },
    {
      name: "Indoor Room",
      description: "Quiet space build for a singular group to use",
      imageUrl: "https://c4.wallpaperflare.com/wallpaper/794/967/673/math-school-study-wallpaper-preview.jpg",
      loc: [
        "University Crossing",
        "Dorm Room/Building",
        "Library",
        "Empty Classroom"
      ],
    },
  ];

  return (
    <div class = "container">
      <NavigationBar />

      <main className="card-container">
        {studySpaces.map((space, index) => (
          <StudySpaceCard
            key={index}
            {...space}
            onReserve={handleReserve}
          />
        ))}
      </main>

      {selectedSpace && (
        <div className="confirmation">
          ✅ You reserved: <strong>{selectedSpace}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
