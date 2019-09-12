import React, { useState, useEffect } from "react";
import GlobalStyle from './global-style';
import FlagContainer from './components/FlagContainer';
import MessageOnMobile from './components/MessageOnMobile';
import WelcomeModal from './components/WelcomeModal';


function App() {
  
  //State that triggers circles trail animation
  const [isReady, setIsReady] = useState(false);
  useEffect(()=>{
    setIsReady(Boolean(localStorage.getItem('visited')))
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
