import React, { useState, useEffect } from "react";
import GlobalStyle from "./global-style";
import FlagContainer from "./components/FlagContainer";
import MessageOnMobile from "./components/MessageOnMobile";
import WelcomeModal from "./components/WelcomeModal";

function App() {

  
  //State that triggers circles trail animation
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(Boolean(localStorage.getItem("visited")));
  }, []);

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
    <>
      <GlobalStyle />
      {isMobile ? (
        <MessageOnMobile />
      ) : (
        <>
          <WelcomeModal setIsReady={setIsReady} />
          <FlagContainer isReady={isReady} />
        </>
      )}
    </>
  );
}

export default App;
