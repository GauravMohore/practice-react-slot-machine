import "./index.css";
import SlotM from "./Components/SlotM";



export default function App() {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          Slot machine game
        </span>{" "}
        🎰
      </h1>
      <SlotM/>
    </>
  );
}
