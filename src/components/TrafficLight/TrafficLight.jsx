import "./light-styles.css";
import React, { useState } from "react";

export default function TrafficLight() {
  const [activeClass, setActiveClass] = useState();
  const activate = (event) => {
    setActiveClass(event.target.id);
    console.log(event);
  };
  return (
    <div className="traffic-light">
      <div
        className={activeClass === "red" ? activeClass : null}
        onClick={activate}
        id="red"
      ></div>
      <div
        className={activeClass === "orange" ? activeClass : null}
        onClick={activate}
        id="orange"
      ></div>
      <div
        className={activeClass === "green" ? activeClass : null}
        onClick={activate}
        id="green"
      ></div>
      {/* <div className={activeClass} onClick={activate} id="orange"></div>
      <div className={activeClass} onClick={activate} id="green"></div> */}
    </div>
  );
}
