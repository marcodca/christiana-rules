import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";

/* The modal is meant to be displayed only the first time the page is visited */

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background: #000;
  opacity: 0.7;
`;

const Modal = styled.div`
  width: 50%;
  height: 60%;
  position: absolute;
  z-index: 2;
  background: white;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const WelcomeModal = () => {
  const [isFirstTimeVisiting, setIsFirstTimeVisiting] = useState(true);

  useLayoutEffect(() => {
    const visited = localStorage.getItem("visited");
    setIsFirstTimeVisiting(visited ? false : true);
  }, [isFirstTimeVisiting]);
  return (
    isFirstTimeVisiting && (
      <>
        <Background />
        <Modal>
          <button
            onClick={() => {
              localStorage.setItem("visited", true);
              setIsFirstTimeVisiting(false);
            }}
          >
            Ok
          </button>
        </Modal>
      </>
    )
  );
};

export default WelcomeModal;
