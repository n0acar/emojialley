import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const reactGA = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  let TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(TRACKING_ID);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default reactGA;
