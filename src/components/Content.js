import React from "react";
import { animated, useTrail } from "react-spring";
import styled from "styled-components";
import Circle from "./Circle";
import PropTypes from "prop-types";

const Container = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const CirclesContainer = styled(animated.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const makeTransform = (offset = 1) => (x, y) =>
  `translate3d(${x / offset}px,${y / offset}px,0)`;

const Content = ({ animationProps, isReady }) => {
  //Array to reference the different circle rules as props in the trail mapping
  const circleRules = ["no-running", "no-photo", "have-fun"];

  //Animation
  const circlesTrail = useTrail(circleRules.length, {
    marginTop: `0px`,
    from: { marginTop: `-1500px` },
  });

  return (
    <>
      <Container
        style={{
          transform: animationProps.xy.interpolate(makeTransform(6))
        }}
      >
        <CirclesContainer>
          {circlesTrail.map((props, index) => {
            return (
              isReady && (
                <Circle
                  transition={props}
                  rule={circleRules[index]}
                  key={index}
                />
              )
            );
          })}
        </CirclesContainer>
      </Container>
    </>
  );
};

Content.propTypes = {
  animationProps: PropTypes.object.isRequired,
  isReady: PropTypes.bool
};

export default Content;
