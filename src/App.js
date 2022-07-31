import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          style={{
            position: "absolute",
            marginLeft: "auto",
            left: "0",
            right: "0",
            marginTop: "auto",
            textAlign: "center",
            zIndex: 9,
            width: window.innerWidth,
            height: window.innerHeight,
          }}
        />
        <canvas
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: "0",
            right: "0",
            textAlign: "center",
            zIndex: 9,
            width: window.innerWidth,
            height: window.innerHeight,
          }}
        />
      </header>
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default App;
