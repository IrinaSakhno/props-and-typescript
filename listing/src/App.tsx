import React from "react";
import Listing from "./components/Listing/Listing";
import { etsy } from "./data/etsy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="item-list">
        <Listing items={etsy || []} />
      </div>
    </div>
  );
}

export default App;
