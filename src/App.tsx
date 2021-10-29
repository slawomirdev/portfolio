import React, { Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalstyles";
import Home from "./sites/Home";
import Error from "./sites/Error";
import Spinner from "./components/Spinner";

const About = lazy(() => import("./sites/About"));
const Work = lazy(() => import("./sites/Work"));

const App: React.FC = () => {
  //Animacja przejścia między stronami
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence>
        <Suspense fallback={<Spinner />}>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/work" exact>
              <Work />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </div>
  );
};

export default App;
