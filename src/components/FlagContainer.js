import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Flag from "./Flag";
import PropTypes from "prop-types";

/*
This container is gonna be in charged of giving the 3d effect when the mouse moves around the screen, it's doing so by using perspective, rotateX, rotateY and scaling (see the "trans" function) on an inner component that is taking 100% size. 
For more on this, check the react-spring documentation, and this demo: https://codesandbox.io/embed/rj998k4vmm .
*/

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Inner = styled(animated.div)`
  width: 95%;
  height: 95%;
  border-radius: 2px;
  background: #e62f2d;
`;
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 40,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const FlagContainer = ({isReady}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 85, tension: 90, friction: 100 }
  }));

  return (
    <Container>
      <Inner
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <Flag isReady={isReady}/>
      </Inner>
    </Container>
  );
};

FlagContainer.propTypes = { isReady : PropTypes.bool };

export default FlagContainer;
