import React, { useEffect, useState } from "react";

const ImageGrid = ({ onImageClick, language }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch(`/content-modules/${language}/index.json`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, [language]); // Reload images when language changes

  const playAudio = (audioPath) => {
    const audio = new Audio(`/content-modules/${language}/${audioPath}`);
    audio.play();
  };

  return (
    <div className="image-grid mt-3" id="imageGrid">
      {images.map((entry, index) => (
        <div
          className="letter-button btn btn-light position-relative"
          key={index}
          onClick={() => onImageClick(entry)}
        >
          <button
            className="audio-button btn btn-outline-dark btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              playAudio(entry.audio);
            }}
          >
            <i className="bi bi-volume-up-fill"></i>
          </button>
          <div>{entry.word.toUpperCase()}</div>
          <img src={`/content-modules/${language}/${entry.image}`} alt={entry.word} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
