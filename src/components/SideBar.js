import React, { useState } from "react";
import styled from "styled-components/macro";
import { animated, useSpring } from "react-spring";
import logo from "../images/logo.png";
import githubIcon from "../images/github-icon.svg";

const Container = styled.div`
  width: 110px;
  height: 60%;
  position: absolute;
  top: 20%;
  right: 0;
`;

const Arrow = styled(animated.div)`
  width: 100px;
  height: 60%;
  position: absolute;
  top: 20%;
  right: 0;
  border-radius: 5px 0 0 5px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Info = styled.div`
  width: 90%;
  height: 33%;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const SideBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const arrowAnimation = useSpring({
    from: {
      clipPath: `polygon(76% 42%, 76% 48%, 100% 48%, 100% 64%, 78% 64%, 77% 70%, 47% 56%)`
    },
    to: isHovered
      ? {
          clipPath: `polygon(0 0, 50% 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0% 50%)`
        }
      : {
          clipPath: `polygon(76% 42%, 76% 48%, 100% 48%, 100% 64%, 78% 64%, 77% 70%, 47% 56%)`
        }
  });

  return (
    <>
      <Container
        onMouseEnter={() => {
          setIsHovered(true);
        }}
      />
      <Arrow
        style={arrowAnimation}
        onMouseLeave={e => {
          e.stopPropagation();
          setIsHovered(false);
        }}
      >
        {isHovered && (
          <>
            <Info>
              Made by:
              <a href={"https://www.marcodecara.com"} title={"marcodecara.com"}>
                <img
                  width={80}
                  src={logo}
                  alt={"marcodecara.com logo"}
                  css={`
                    filter: invert(100%);
                  `}
                />
              </a>
            </Info>
            <Info>
              Source:
              <a href={"https://github.com/marcodca/christiana-rules"}>
                <img width={80} src={githubIcon} alt={"github logo"}/>
              </a>
            </Info>
          </>
        )}
      </Arrow>
    </>
  );
};

export default SideBar;
