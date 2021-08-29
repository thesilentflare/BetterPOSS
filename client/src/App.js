import "./App.scss";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import MenuSystem from "./components/MenuSystem/MenuSystem";
import React, { useState } from "react";

function App() {
  const [currentOrder, setCurrentOrder] = useState({
    items: [],
    subtotal: 0.00,
    tax: 0.00,
    total: 0.00,
  });

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Better POSS</h1>
      {/* Main Wrapper */}
      <HeaderBar />
      <div className="wrapper">
        <OrderSummary order={currentOrder}/>
        <MenuSystem />
        {/* Left Order Summary */}
        {/* Right Order Menu */}
      </div>
    </div>
  );
}

export default App;
