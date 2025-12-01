import React, { useState } from "react";
import "./StudySpaceCard.css";

function StudySpaceCard({ name, description, imageUrl, loc, onReserve }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleReserveClick = () => {
    onReserve(name);
  };

  const openLocationModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <div className="study-space-card">
      <img src={imageUrl} alt={name} className="space-image" />
      <div className="space-info">
        <h2>{name}</h2>
        <p>{description}</p>

        <button
          onClick={toggleFavorite}
          className={`fav-btn ${isFavorite ? "active" : ""}`}
        >
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>

        <button onClick={openLocationModal} className="book-btn">
            View Locations
        </button>

        <button onClick={handleReserveClick} className="book-btn">
          Reserve
        </button>
      </div>
    </div>
    {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            <h3>Available Locations</h3>

            <ul className="location-list">
              {loc.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default StudySpaceCard;
