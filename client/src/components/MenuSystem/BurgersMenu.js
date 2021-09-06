import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import "./MenuSystem.scss";

export default function BurgersMenu(props) {
  const temp = [
    {
      item: "BMac",
      img: "",
      options: [
        { item: "Lettuce", amount: 1 },
        { item: "Tomato", amount: 0 },
        { item: "Cheese", amount: 0 },
        { item: "Mayo", amount: 0 },
        { item: "MacSauce", amount: 1 },
      ],
    },
    { item: "Cheese Burger", img: "", options: [] },
    { item: "QPounder", img: "", options: [] },
  ];
  const [basicModal, setBasicModal] = useState(false);
  const [selectedBurger, setSelectedBurger] = useState({});
  const [selectedBurgerOptions, setSelectedBurgerOptions] = useState({});
  const setOptions = (burger) => {
    setSelectedBurger(burger);
    setSelectedBurgerOptions(burger.options);
    toggleShow();
  };
  const toggleShow = () => {
    setBasicModal(!basicModal);
  };
  const addToOrder = () => {
    let temp = { name: selectedBurger.item.toString(), special: selectedBurgerOptions, amount: 1, price: 4.99 };
    props.setorder({
      items: [...props.order.items, temp],
      subtotal: props.order.subtotal,
      tax: props.order.tax,
      total: props.order.total,
      time: null,
    });
    toggleShow();
  };
  const updateOptions = (key) => {
    let temp = selectedBurgerOptions;
    temp[key].amount++;
    //setSelectedBurgerOptions(temp);
    // console.log(selectedBurgerOptions);
    setSelectedBurgerOptions(() => ([...temp]));
  };

  return (
    <div>
      <div className="burger__container">
        {temp.map((burger, key) => {
          return (
            <div key={key}>
              <MDBBtn
                className="mx-2"
                color="dark"
                onClick={() => setOptions(burger)}
              >
                <div>{burger.item}</div>
              </MDBBtn>
              <MDBModal
                show={basicModal}
                getOpenState={(e) => setBasicModal(e)}
                tabIndex="-1"
                className="burger__modal"
              >
                <MDBModalDialog centered size="lg" scrollable>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>
                        {selectedBurger.item} OPTIONS
                      </MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleShow}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      {/* <div>{selectedBurger.options}</div> */}
                      <div>
                        {selectedBurger.options &&
                          selectedBurger.options.map((option, key) => {
                            return (
                              <div key={key}>
                                <div>{option.item}</div>
                                <div>{option.amount}</div>
                                <button
                                  onClick={() => updateOptions(key)}
                                ></button>
                              </div>
                            );
                          })}
                      </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="warning" onClick="">
                        REMOVE ALL TOPINGS
                      </MDBBtn>
                      <MDBBtn color="danger" onClick={toggleShow}>
                        CANCEL
                      </MDBBtn>
                      <MDBBtn color="success" onClick={() => addToOrder()}>
                        ADD TO ORDER
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
