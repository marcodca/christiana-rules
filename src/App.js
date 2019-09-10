import React, { useState, useEffect } from "react";
import GlobalStyle from './global-style';
import FlagContainer from './components/FlagContainer';
import MessageOnMobile from './components/MessageOnMobile';
import WelcomeModal from './components/WelcomeModal';


function App() {

  const [isReady, setIsReady] = useState(false);

  useEffect(()=>{
    setIsReady(localStorage.getItem('visited'))
  },[])

  return (
    <> 
      <GlobalStyle/>
      <MessageOnMobile/>
      <WelcomeModal setIsReady={setIsReady}/>
      <FlagContainer isReady={isReady}/>
    </>
  )
}

export default App;
