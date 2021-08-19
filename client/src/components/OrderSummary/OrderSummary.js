import React from "react";
import "./OrderSummary.css";

const temp = {
  items: [
    {
      type: "Burger",
      name: "BMac",
      special: ["NO LETTUCE", "EXT MAYO"],
      amount: 1,
      price: 4.99,
    },
    {
      type: "Drink",
      name: "Fanta",
      size: "L",
      amount: 1,
      price: 0.99,
    },
  ],
};

const OrderSummary = () => {
  return (
    <div className="container__order">
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {temp.items.map((item, key) => {
            return (
              <div>
                <div
                  style={{
                    display: "inline-grid",
                    gridTemplateColumns: "repeat(4, 40px [col-start])",
                    columnGap: "50px",
                  }}
                >
                  <div>{item.amount}</div>
                  <div>{item.name}</div>
                  <div>{item.size ? item.size : " "}</div>
                  <div>{item.price}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* {item.special ? item.special : " "} */}
                  {item.special ? item.special.map((special) => {
                    return (
                      <div>
                        <div>*{special}</div>
                      </div>
                    );
                  }): " "}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          SubTOTAL
        </div>
        <div>
          TAX
        </div>
        <div>
          TOTAL
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
