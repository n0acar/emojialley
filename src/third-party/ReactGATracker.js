import { useEffect, useState } from "react";
//import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const ReactGATracker = () => {
  //const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    console.log("GA Tracker");
    let TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

    console.log(TRACKING_ID);
    if (TRACKING_ID !== undefined) {
      ReactGA.initialize(TRACKING_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(window.location.pathname + window.location.search); //location.pathname + location.search
    }
  }, [initialized]); //location
};

export default ReactGATracker;
