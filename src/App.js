import React from "react";
import GlobalStyle from './global-style';
import FlagContainer from './components/FlagContainer';
import MessageOnMobile from './components/MessageOnMobile';
import WelcomeModal from './components/WelcomeModal';


function App() {

  return (
    <> 
      <GlobalStyle/>
      <MessageOnMobile/>
      <WelcomeModal/>
      <FlagContainer/>
    </>
  )
}

export default App;
