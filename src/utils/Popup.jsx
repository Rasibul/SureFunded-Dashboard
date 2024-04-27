import { useState, useEffect } from "react";
import popup from "../assets/popup.jpg";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const [timer, setTimer] = useState(3000);

  const handleClose = () => {
    setShowPopup(false);
    setTimer(61000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
    }, timer);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[300px] w-[280px] sm:w-[360px] sm:h-[380px] lg:h-[470px] lg:w-[450px] shadow-md z-50 rounded-md">
          <button
            onClick={handleClose}
            className="absolute top-2 md:right-8 right-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="white"
              className="w-6 h-6"
            >
              <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
            </svg>
          </button>
          <img
            className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-full rounded-md"
            src={popup}
            alt="popup image"
          />
        </div>
      )}
    </div>
  );
}

export default Popup;
