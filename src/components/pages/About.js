import React, { useState, useEffect } from "react";

function About() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(200);

  console.log("device: " + deviceWidth + " x " + deviceHeight);
  console.log("window: " + window.innerWidth + " x " + window.innerHeight);
  const c = document.getElementById("myCanvas");
  if (c) {
    console.log("canvas: " + c.width + " x " + c.height);
  }

  useEffect(() => {
    console.log("useEffect");
    // setSize("resize");
    // window.addEventListener("resize", () => setSize("resize"));
    window.addEventListener("orientationchange", () =>
      setSize("orientationchange")
    );
    return () => {
      // window.removeEventListener("resize", () => setSize("resize"));
      window.removeEventListener("orientationchange", () =>
        setSize("orientationchange")
      );
    };
  }, []);

  const setSize = (text) => {
    if (text === "orientationchange") {
      // console.log(window.innerWidth + " x " + window.innerHeight);
      if (window.innerHeight > window.innerWidth) {
        console.log("pionowa > pozioma");
        const newWidth =
          deviceHeight > deviceWidth ? deviceHeight - 40 : deviceWidth - 40;
        console.log("setNewWidth");
        setWidth(newWidth);
      } else {
        console.log("pozioma > pionowa");
        const newWidth =
          deviceHeight > deviceWidth ? deviceWidth - 40 : deviceHeight - 40;
        console.log("setNewWidth");
        setWidth(newWidth);
      }
    }
  };

  console.log(
    "render " +
      String(new Date().getHours()) +
      ":" +
      String(new Date().getMinutes()) +
      ":" +
      String(new Date().getSeconds())
  );

  return (
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
      <div style={{ display: "grid", gap: "5px", marginBottom: "5px" }}>
        <div style={{ backgroundColor: "#00ffff", padding: "5px" }}>test</div>
        <div style={{ backgroundColor: "#00ffff", padding: "5px" }}>test</div>
        <div style={{ backgroundColor: "#00ffff", padding: "5px" }}>test</div>
        <div style={{ backgroundColor: "#00ffff", padding: "5px" }}>test</div>
        <div style={{ backgroundColor: "#00ffff", padding: "5px" }}>test</div>
      </div>
      <canvas
        key={width}
        id="myCanvas"
        width={width}
        style={{ border: "1px solid #000000" }}
      ></canvas>
    </React.Fragment>
  );
}

export default About;
