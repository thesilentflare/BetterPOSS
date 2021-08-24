import React from "react";
import "./OrderSummary.scss";

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
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    },
    {
      type: "Fries",
      name: "FFries",
      size: "S",
      special: ["PROMO"],
      amount: 1,
      price: 0.0,
    }
  ],
  subtotal: 5.58,
  tax: 0.73,
  total: 6.31,
};

const OrderSummary = () => {
  return (
    <div className="container__order">
      <div>
        <h2 style={{ textAlign: "center" }}>ORDER SUMMARY</h2>
      </div>
      <div className="order__title">
        <div className="order__grids">
          <div>Qt.</div>
          <div>Item</div>
          <div>Size</div>
          <div>Price</div>
        </div>
      </div>
      <div className="order__scroller">
        <div className="order__rows">
          {temp.items.map((item, key) => {
            return (
              <div>
                <div className="order__row__columns">
                  <div>{item.amount}</div>
                  <div>{item.name}</div>
                  <div>{item.size ? item.size : " "}</div>
                  <div>{item.price.toFixed(2)}</div>
                </div>
                <div className="order__special">
                  {/* {item.special ? item.special : " "} */}
                  {item.special
                    ? item.special.map((special) => {
                        return (
                          <div className="inner">
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
        <div>
          <div className="order__divider">
            *****************************************
          </div>
          <div className="order__totals">
            <div>SubTOTAL:</div>
            <div>{temp.subtotal.toFixed(2)}</div>
            <div>TAX:</div>
            <div>{temp.tax.toFixed(2)}</div>
            <div>TOTAL:</div>
            <div>{temp.total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
