import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css"

export default function App() {
  let [show, setShow] = useState(false);
  let price = 10.59;

  const toggleModal = () => {
    setShow(!show);
  };

  const display = show ? <Modal toggleModal={toggleModal} price={price} /> : "";

  return (
    <div className="container">
      <h1>Card Modal</h1>
      <button className="btn btn-light" onClick={toggleModal}>
        Afficher
      </button>
      {display}
    </div>
  );
}
