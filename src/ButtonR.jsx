import React, { useState } from "react";

const ButtonR = ({ list }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [randomText, setRandomText] = useState("");
  const [showStart, setShowStart] = useState(true);

  const handleOpenModal = () => {
    setShowStart(true);
    setRandomText("");
    setModalOpen(true);
  };

  const handleStart = () => {
    setShowStart(false);
    if (!list || list.length === 0) {
      setRandomText("リストが空です");
    } else {
      const randomItem = list[Math.floor(Math.random() * list.length)];
      setRandomText(randomItem.title || "タイトルなし");
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button className="buttonR" onClick={handleOpenModal}>
        randam
      </button>
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: "#fff",
              padding: "32px 48px",
              borderRadius: "12px",
              minWidth: "240px",
              fontSize: "1.5rem",
              color: "#6e6457",
              boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {showStart ? (
              <button className="buttonR" onClick={handleStart}>
                スタート
              </button>
            ) : (
              <>
                {randomText}
                <div>
                  <button className="closeButton" onClick={closeModal}>
                    もどる
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonR;
