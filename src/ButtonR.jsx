import React, { useState } from "react";
import "./ButtonR.css";

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
    } else {
      const randomItem = list[Math.floor(Math.random() * list.length)];
      setRandomText(randomItem.title || "タイトルなし");
    }
  };
  const handleRetry = () => {
    if (!list || list.length === 0) {
      setRandomText("なんもないよ");
    } else {
      const randomItem = list[Math.floor(Math.random() * list.length)];
      setRandomText(randomItem.title || "タイトルなし");
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
          <div onClick={(e) => e.stopPropagation()}>
            {showStart ? (
              <div className="page1">
                <h2>たすくをたくす</h2>
                <img className="cat" src="/dancing-cat.gif" />
                <h3>タスクがたまっているけど何からやろう...?</h3>
                <h3>そんなときはこの猫にタスクを託してみましょう。</h3>
                <h3>そのときのノリで１つ選んでくれます。</h3>
                <button className="buttonR2" onClick={handleStart}>
                  たくす
                </button>
              </div>
            ) : (
              <>
                <div className="page2">
                  <img className="wow" src="/集中線.gif" />
                  <div className="randomT">{randomText}</div>
                  <div style={{ display: "flex" }}>
                    <button className="buttonR3" onClick={handleRetry}>
                      やりなおし
                    </button>
                    <button className="buttonR3" onClick={closeModal}>
                      もどる
                    </button>
                  </div>
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
