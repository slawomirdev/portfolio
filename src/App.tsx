import React from "react";
import GlobalStyle from "./globalstyles";
import Home from "./sites/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Home />
      </>
    </div>
  );
};

export default App;
