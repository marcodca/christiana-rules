import React from "react";
import GlobalStyle from './global-style';
import FlagContainer from './components/FlagContainer';
import MessageOnMobile from './components/MessageOnMobile';


function App() {

  return (
    <> 
      <GlobalStyle/>
      <MessageOnMobile/>
      <FlagContainer/>
    </>
  )
}

export default App;
