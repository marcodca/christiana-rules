import React, { useState, useEffect } from "react";
import GlobalStyle from "./global-style";
import FlagContainer from "./components/FlagContainer";
import MessageOnMobile from "./components/MessageOnMobile";
import WelcomeModal from "./components/WelcomeModal";
import SideBar from './components/SideBar';
import { useIsMobile } from './hooks';

function App() {


  //State that triggers circles trail animation
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(Boolean(localStorage.getItem("visited")));
  }, []);

  const isMobile = useIsMobile();

  return (
    <>
      <GlobalStyle />
      {isMobile ? (
        <MessageOnMobile />
      ) : (
        <>
          <WelcomeModal setIsReady={setIsReady} />
          <FlagContainer isReady={isReady} />
          <SideBar/>
        </>
      )}
    </>
  );
}

export default App;
