import React, { useState } from "react";
import styled from "styled-components/macro";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import clamp from "lodash-es/clamp";
import PropTypes from "prop-types";
import noRunningIcon from "../images/no-running-icon.svg";
import noPhotoIcon from "../images/no-photo-icon.svg";
import funIcon from "../images/fun-icon.svg";

const Container = styled(animated.div)`
  width: 250px;
  height: 250px;
`;

const BackCircle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
  font-size: 1.2rem;
  user-select: none;
  border: 3px solid #000;
  box-sizing: border-box;
  background: rgb(36, 242, 43);
  background: linear-gradient(
    180deg,
    rgba(36, 242, 43, 1) 0%,
    rgba(122, 255, 98, 1) 100%
  );
`;

const Icon = styled.img`
  width: 140px;
`;

const rules = {
  "no-running": {
    text: (
      <span>
        don't run - <br /> it causes panic
      </span>
    ),
    icon: noRunningIcon
  },
  "no-photo": {
    text: "no photos",
    icon: noPhotoIcon
  },
  "have-fun": {
    text: "have fun",
    icon: funIcon
  }
};

const Circle = ({ rule, transition }) => {
  //State for styling the pointer accordingly
  const [isGrabbed, setIsGrabbed] = useState(false);

  //Moving the circle around with useGesture, check : https://codesandbox.io/embed/r24mzvo3q
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 3, 13);
    setIsGrabbed(down ? true : false);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 }
    });
  });

  const FrontCircle = styled(animated.div)`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    cursor: ${() => (isGrabbed ? `-webkit-grabbing` : `-webkit-grab`)};
    background: #feff00;
    position: absolute;
  `;

  return (
    <Container style={transition}>
      <FrontCircle
        {...bind()}
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`)
        }}
      />
      <BackCircle>
        <Icon src={rules[rule].icon} />
        <p
          css={`
            margin-top: -22%;
          `}
        >
          {rules[rule].text}
        </p>
      </BackCircle>
    </Container>
  );
};

Circle.propTypes = {
  rule: PropTypes.oneOf(["no-running", "no-photo", "have-fun"]).isRequired
};

export default Circle;
