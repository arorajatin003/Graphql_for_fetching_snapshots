import "./styles.css";
import React from "react";
import SnapshortCard from "./SnapshortCard";
export default function App() {
  return (
    <div className="App">
      <SnapshortCard props="aave.eth" />
    </div>
  );
}
