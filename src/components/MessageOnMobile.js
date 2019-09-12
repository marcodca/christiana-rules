import React from "react";
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
  overflow: hidden;
  &::before{
      content: "Undskyld";
      font-size: 6rem;
      position: absolute;
      z-index: 0;
      top: 40%;
      left: 50%;
      opacity: 0.1;
      transform: rotate(35deg) translate(-50%);
      font-family: 'Pacifico', cursive;
      letter-spacing: 12px;
  }
`;

const MessageOnMobile = () => {
    // const [isMobile, setIsMobile] = useState(false);
  
    // const checkIsMobile = () => {
    //   setIsMobile(window.innerWidth >= 768 ? false : true);
    // };
  
    // useEffect(() => {
    //   checkIsMobile();  
    //   window.addEventListener("resize", checkIsMobile);
    //   return () => {
    //     window.removeEventListener("resize", checkIsMobile);
    //   };
    // });

  return (
    // isMobile &&
      <Message>
        <p>
          Apologies, but this web page is available on desktop only, try again
          when you are at home.
        </p>
      </Message>
    )
};

export default MessageOnMobile;
