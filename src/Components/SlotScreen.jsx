import React from "react";
import "./components.css";
import SlotM, { arr,n,RNG} from "./SlotM";



export default function SlotScreen(props) {
  
  return (
    <>
      <div className="slot-div-container">
        <div className="item item-1">{arr[RNG(n)]}</div>
        <div className="item item-2">{arr[RNG(n)]}</div>
        <div className="item item-3">{arr[RNG(n)]}</div>
      </div>
    </>
  );
}
