import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import MenuSystem from "./components/MenuSystem/MenuSystem";

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Better POSS</h1>
      {/* Main Wrapper */}
      <HeaderBar />
      <div className="wrapper">
        <OrderSummary />
        <MenuSystem />
        {/* Left Order Summary */}
        {/* Right Order Menu */}
      </div>
    </div>
  );
}

export default App;
