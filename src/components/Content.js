import React, { useState } from "react";
import clamp from "lodash-es/clamp";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import styled from "styled-components";

const Square = styled(animated.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  cursor: -webkit-grab;
  background: #FEFF00;
  position: absolute;
  top: 200px;
  z-index: 1;
`;

const Cover = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  cursor: -webkit-grab;
  background: blue;
  position: absolute;
  top: 200px;
  color: whitesmoke;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const makeTransform = (offset = 1) => (x, y) => `translate3d(${x / offset}px,${y / offset}px,0)`

const Content = ({animationProps }) => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 3, 13);

    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 }
    });
  });

  return (
    <>
      <animated.div
        style={{
          transform: animationProps.xy.interpolate(makeTransform(6))
        }}
      >
        <Square
          {...bind()}
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`)
          }}
        />
        <Cover>
          It is what it is!
        </Cover>
      </animated.div>
    </>
  );
};

export default Content;
