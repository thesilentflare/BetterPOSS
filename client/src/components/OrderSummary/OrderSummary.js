import React from "react";
import "./OrderSummary.scss";

// const temp = {
//   items: [
//     {
//       type: "Burger",
//       name: "BMac",
//       special: ["NO LETTUCE", "EXT MAYO"],
//       amount: 1,
//       price: 4.99,
//     },
//     {
//       type: "Drink",
//       name: "Fanta",
//       size: "L",
//       amount: 1,
//       price: 0.99,
//     },
//     {
//       type: "Fries",
//       name: "FFries",
//       size: "S",
//       special: ["PROMO"],
//       amount: 1,
//       price: 0.0,
//     },
//     {
//       type: "Fries",
//       name: "FFries",
//       size: "S",
//       special: ["PROMO"],
//       amount: 1,
//       price: 0.0,
//     },
//     {
//       type: "Fries",
//       name: "FFries",
//       size: "S",
//       special: ["PROMO"],
//       amount: 1,
//       price: 0.0,
//     },
//     {
//       type: "Fries",
//       name: "FFries",
//       size: "S",
//       special: ["PROMO"],
//       amount: 1,
//       price: 0.0,
//     },
//     {
//       type: "Fries",
//       name: "FFries",
//       size: "S",
//       special: ["PROMO"],
//       amount: 1,
//       price: 0.0,
//     }
//   ],
//   subtotal: 5.58,
//   tax: 0.73,
//   total: 6.31,
// };

class OrderSummary extends React.Component {
  render() {
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
            {this.props.order.items.map((item, key) => {
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
          {this.props.order.items > 0 ? (
            <div>
              <div className="order__divider">
                *****************************************
              </div>
              <div className="order__totals">
                <div>SubTOTAL:</div>
                <div>{this.props.order.subtotal.toFixed(2)}</div>
                <div>TAX:</div>
                <div>{this.props.order.tax.toFixed(2)}</div>
                <div>TOTAL:</div>
                <div>{this.props.order.total.toFixed(2)}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default OrderSummary;
