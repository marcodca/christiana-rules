import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import Circle from './Circle';

const Container = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`
const CirclesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const makeTransform = (offset = 1) => (x, y) =>
  `translate3d(${x / offset}px,${y / offset}px,0)`;

const Content = ({ animationProps }) => {

  return (
    <>
      <Container
        style={{
          transform: animationProps.xy.interpolate(makeTransform(6))
        }}
      >
        <CirclesContainer>
          <Circle rule={'no-running'}/>
          <Circle rule={'no-photo'}/>
          <Circle rule={'have-fun'}/>
        </CirclesContainer>
      </Container>
    </>
  );
};

export default Content;
