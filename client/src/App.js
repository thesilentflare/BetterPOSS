import "./App.scss";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import MenuSystem from "./components/MenuSystem/MenuSystem";
import React, { useState } from "react";

function App() {
  const [currentOrder, setCurrentOrder] = useState({
    items: [],
    subtotal: 0.0,
    tax: 0.0,
    total: 0.0,
    time: null
  });

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Better POSS</h1>
      {/* Main Wrapper */}
      <HeaderBar />
      <div className="wrapper">
        <OrderSummary order={currentOrder} setorder={setCurrentOrder} />
        <MenuSystem setorder={setCurrentOrder} />
        {/* Left Order Summary */}
        {/* Right Order Menu */}
      </div>
    </div>
  );
}

export default App;
