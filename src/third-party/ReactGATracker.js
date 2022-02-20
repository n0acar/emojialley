import { useEffect, useState } from "react";
//import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import ClientIdBuilder from "../utils/ClientIdBuilder";

const ReactGATracker = () => {
  //const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    let TRACKING_ID = process.env.GATSBY_GA_TRACKING_ID;

    if (TRACKING_ID !== undefined) {
      ReactGA.initialize(TRACKING_ID, {
        gaOptions: {
          storage: "none",
          storeGac: false,
          clientId: ClientIdBuilder(),
        },
      });
      ReactGA.set({ anonymizeIp: true });
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
