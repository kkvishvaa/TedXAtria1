import React, { useState } from 'react';
import '../styles/Trailer.css';

const Trailer= () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="trailer-btn" onClick={() => setIsOpen(true)}>
      Watch the TEDx Spark
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe 
              style={{ border: 0 }}
              src="https://www.youtube.com/embed/OvG9KEXvuog"
              title="Main Trailer"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen>
            </iframe>
            <button className="close-btn" onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Trailer;
