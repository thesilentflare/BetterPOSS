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
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
  ],
  subtotal: 5.58,
  tax: 0.73,
  total: 6.31,
};

const OrderSummary = () => {
  return (
    <div className="container__order">
      <div
        style={{
          borderBottom: "1px solid black",
        }}
      >
        <div
          style={{
            display: "inline-grid",
            gridTemplateColumns: "repeat(4, 30px [col-start])",
            columnGap: "50px",
            margin: "10px 10px 0px 30px",
          }}
        >
          <div>Qt.</div>
          <div>Item</div>
          <div>Size</div>
          <div>Price</div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {temp.items.map((item, key) => {
            return (
              <div>
                <div
                  style={{
                    display: "inline-grid",
                    gridTemplateColumns: "repeat(4, 30px [col-start])",
                    columnGap: "50px",
                    margin: "10px 10px 0px 30px",
                  }}
                >
                  <div>{item.amount}</div>
                  <div>{item.name}</div>
                  <div>{item.size ? item.size : " "}</div>
                  <div>{item.price.toFixed(2)}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                    marginTop: 0,
                  }}
                >
                  {/* {item.special ? item.special : " "} */}
                  {item.special
                    ? item.special.map((special) => {
                        return (
                          <div style={{marginLeft: "25px"}}>
                            <div>*{special}</div>
                          </div>
                        );
                      })
                    : " "}
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "inline-grid",
            gridTemplateColumns: "repeat(2, 190px [col-start])",
            columnGap: "50px",
            margin: "10px 10px 0px 30px",
          }}
        >
          <div>SubTOTAL:</div>
          <div>{temp.subtotal.toFixed(2)}</div>
          <div>TAX:</div>
          <div>{temp.tax.toFixed(2)}</div>
          <div>TOTAL:</div>
          <div>{temp.total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
