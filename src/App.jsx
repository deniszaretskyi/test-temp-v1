import { useEffect } from "react";

import Tours from "./components/Tours.jsx";
import Tracker from "@openreplay/tracker";
const App = () => {
  useEffect(() => {
    const tracker = new Tracker({
      projectKey: "ez1lRn4alfFoQVgOatvC",
    });
    tracker.start();
  }, []);
  return (
    <>
      <Tours />
    </>
  );
};

export default App;
