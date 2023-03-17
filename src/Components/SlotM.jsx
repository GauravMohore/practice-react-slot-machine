import React from "react";
import "./components.css";
import SlotScreen from "./SlotScreen";

const arr = ["🍎", "🍌", "🍇", "🍊"];
const n = arr.length;

function RNG(n) {
  let rNumb = Math.floor(Math.random() * n);
  return rNumb;
}

let a = arr[RNG(n)];
let b = arr[RNG(n)];
let c = arr[RNG(n)];

export default function SlotM() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div className="slot-fade">
        <SlotScreen />
      </div>
      <SlotScreen />
      <div className="slot-fade">
        <SlotScreen />
      </div>
      <div className="btn-div-container">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          SPIN
        </button>
      </div>
    </>
  );
}

export { arr, n, RNG };
