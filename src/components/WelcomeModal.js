import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { animated, useSpring, useTransition } from "react-spring";

/* The modal is meant to be displayed only the first time the page is visited */

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background: #000;
  opacity: 0.7;
`;

const Modal = styled(animated.div)`
  width: 50%;
  height: 60%;
  min-width: 500px;
  position: absolute;
  z-index: 2;
  background: white;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ModalText = styled.p`
  padding: 5%;
  text-align: center;
  font-size: 25px;
  span {
    display: inline-block;
    font-family: "Pacifico", cursive;
    font-size: 35px;
    margin-bottom: 5%;

    a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 72%;
        left: 0;
        width: 100%;
        height: 15%;
        background: linear-gradient(
          180deg,
          rgba(90, 252, 95, 1) 0%,
          rgba(38, 251, 0, 1) 100%
        );
        z-index: -1;
        transform: skewY(20deg) rotate(340deg);
      }
    }
  }
`;

const Button = styled.div`
  font-family: "Pacifico", cursive;
  text-transform: uppercase;
  font-size: 1.5rem;
  cursor: pointer;
  display: inline-block;
  margin-left: 50%;
  transform: translate(-50%);
  position: relative;
  overflow: visible;
  &::before {
    content: "";
    position: absolute;
    top: -22%;
    left: -8%;
    width: 115%;
    height: 140%;
    border: 2px solid #000;
    border-radius: 3px;
    transform: rotate(2deg);
  }
`;
const InnerButton = styled(animated.div)`
  height: 120%;
  background: linear-gradient(
    180deg,
    rgba(90, 252, 95, 1) 0%,
    rgba(38, 251, 0, 1) 100%
  );
  position: absolute;
  top: -10%;
  left: -5%;
  z-index: -1;
`;

const WelcomeModal = ({setIsReady}) => {
  const [isFirstTimeVisiting, setIsFirstTimeVisiting] = useState(true);

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const innerButtonProps = useSpring({
    from: { width: `0%` },
    to: isButtonHovered ? { width: `110%` } : { width: `0%` }
  });

  useLayoutEffect(() => {
    const visited = localStorage.getItem("visited");
    setIsFirstTimeVisiting(visited ? false : true);
  }, [isFirstTimeVisiting]);

  //Transitions
  const modalTransition = useTransition(isFirstTimeVisiting, null, {
    from: { clipPath: `circle(0% at 50% 50%)` },
    enter: { clipPath: `circle(100% at 50% 50%)` },
    leave: { clipPath: `circle(0% at 50% 50%)` }
  });
  const backgroundTransition = useTransition(isFirstTimeVisiting, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { delay: 400 }
  });

  return (
    <>
      {backgroundTransition.map(
        ({ item, key, props }) => item && <Background key={key} style={props} />
      )}
      {modalTransition.map(
        ({ item, key, props }) =>
          item && (
            <Modal key={key} style={props}>
              <ModalText>
                <span>
                  Freetown{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Freetown_Christiania"
                    target="_blank"
                    title="Wikipedia"
                    rel="noopener noreferrer"
                  >
                    Christiania{" "}
                  </a>{" "}
                  is a magical place in Copenhagen...
                </span>
                <br />
                ...where you can find a perfect mix between colors, nature, and
                art within a unique atmosphere. Although freedom is the
                cornerstone of such an amazing place, there are still 3 rules
                you need to be aware of, especially in the Greenlight district.
                Drag the Christiania flag circles around to discover such rules.
              </ModalText>
              <Button
                onMouseEnter={() => {
                  setIsButtonHovered(true);
                }}
                onMouseLeave={() => {
                  setIsButtonHovered(false);
                }}
                onClick={() => {
                  localStorage.setItem("visited", true);
                  setIsFirstTimeVisiting(false);
                  setIsReady(true);
                }}
              >
                continue
                <InnerButton style={innerButtonProps} />
              </Button>
            </Modal>
          )
      )}
    </>
  );
};

export default WelcomeModal;
