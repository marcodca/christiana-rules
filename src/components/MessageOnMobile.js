import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Message = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 3;
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  padding-top: 10%;
  pointer-events: none;
  &::before{
      content: "Undskyld";
      font-size: 7rem;
      position: absolute;
      z-index: 0;
      top: 250px;
      left: 0px;
      opacity: 0.2;
      transform: rotate(35deg);
      font-family: 'Pacifico', cursive;
      letter-spacing: 12px;
  }
`;

const MessageOnMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth >= 768 ? false : true);
    };
  
    useEffect(() => {
      checkIsMobile();  
      window.addEventListener("resize", checkIsMobile);
      return () => {
        window.removeEventListener("resize", checkIsMobile);
      };
    });

  return (
    isMobile &&
      <Message>
        <p>
          Apologies, but this web page is available on desktop only, try again
          when you are at home.
        </p>
      </Message>
    )
};

export default MessageOnMobile;
