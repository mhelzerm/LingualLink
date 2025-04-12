import React, { useState } from 'react';
import ImageGrid from "../ImageGrid";
import '../css/main.css';
import '../css/communication-tool.css';

const Communication = () => {
    const [sentence, setSentence] = useState([]);

    const handleImageClick = (entry) => {
      setSentence((prev) => [...prev, entry]);
    };
  
    const handleClear = () => {
      setSentence([]);
    };
  
    const handleDelete = () => {
      setSentence((prev) => prev.slice(0, -1));
    };
  
    const handlePlay = () => {
      if (sentence.length === 0) return;
      let index = 0;
      const audio = new Audio(`/content-modules/ASL/audio/${sentence[index].word}.mp3`);
      audio.play();
  
      audio.onended = function () {
        index++;
        if (index < sentence.length) {
          audio.src = `/content-modules/ASL/audio/${sentence[index].word}.mp3`;
          audio.play();
        }
      };
    };
  
    const getSize = () => {
      const width = document.documentElement.clientWidth;
      return width / 10;
    };
  
    return (
      <div className="container mt-3">
        <div className="content-container d-flex" id="content-container">
          <div className="button-container me-2">
            <button className="btn btn-danger btn-sm" onClick={handleClear}>
              Clear
            </button>
            <button className="btn btn-primary btn-sm" onClick={handleDelete}>
              Delete
            </button>
            <button className="btn btn-success btn-sm" onClick={handlePlay}>
              Play
            </button>
          </div>
        </div>
        <div className="content-container d-flex" id="content-container">
          <div className="text-box flex-grow-1" id="sentence_builder">
            {sentence.map((entry, index) => (
              <img
                key={index}
                src={`/content-modules/ASL/${entry.image}`}
                alt={entry.word}
                width={getSize()}
                height={getSize()}
                className="me-1"
              />
            ))}
          </div>
        </div>
        <ImageGrid onImageClick={handleImageClick} />
      </div>
    );
  };

export default Communication;