import React, { useState } from "react";
import "./ButtonR.css"

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
      setRandomText("なんもないよ");
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="R">
      <button className="buttonR1" onClick={handleOpenModal}>
        らんだむ
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
          <div className="page1"
            onClick={(e) => e.stopPropagation()}
          >
            {showStart ? (
              <div>
                <h2>たすくをたくす</h2>
                <img className="cat" src="/dancing-cat.gif" />
                <h3>タスクが溜まってるけど何からやろう...?</h3>
                <h4>そんなときはこの猫にタスクを託してみましょう。</h4>
                <button className="buttonR2" onClick={handleStart}>
                  スタート
                </button>
              </div>
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
    </div>
  );
};

export default ButtonR;
