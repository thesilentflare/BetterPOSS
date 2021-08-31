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

export default function BurgersMenu() {
  const temp = [
    {
      item: "BMac",
      img: "",
      options: ["Lettuce", "Tomato", "Cheese", "Mayo", "MacSauce"],
    },
    { item: "Cheese Burger", img: "", options: [] },
    { item: "QPounder", img: "", options: [] },
  ];
  const [basicModal, setBasicModal] = useState(false);
  const [selectedBurger, setSelectedBurger] = useState({});
  const setOptions = (burger) => {
    setSelectedBurger(burger);
    toggleShow();
  };
  const toggleShow = () => {
    setBasicModal(!basicModal);
  };
  return (
    <div>
      <div className="burger__container">
        {temp.map((burger, key) => {
          return (
            <div>
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
              >
                <MDBModalDialog centered size="lg">
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
                    <MDBModalBody>{selectedBurger.options}</MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="warning" onClick="">
                        REMOVE ALL TOPINGS
                      </MDBBtn>
                      <MDBBtn color="danger" onClick={toggleShow}>
                        CANCEL
                      </MDBBtn>
                      <MDBBtn color="success" onClick="">
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
