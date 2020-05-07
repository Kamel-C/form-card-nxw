import React, { useState } from "react";
import FormCard from "./Form";

export default function Modal({ toggleModal, price }) {
  //STATES
  const [card, setCard] = useState({
    email: "",
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });
  let [chosedCard, setChoseCard] = useState(true);
  let [chosenPayment, setChosenPayment] = useState(1);
  let [acceptation, setAcceptation] = useState(false);
  let [validation, setValidation] = useState(false);

  const meansPayments = [
    { id: 1, name: "card", link: "", className: "card-item visa" },
    { id: 2, name: "paypal", link: "", className: "card-item paypal" },
    { id: 3, name: "google", link: "", className: "card-item google" },
  ];

  //ONCLICK REDUCER
  const handleClick = (event) => {
    const name = event.target.id;
    switch (name) {
      case "acceptation":
        return (
          setAcceptation((acceptation = !acceptation)),
          console.log(`Hello I'm acceptaion and I'm: ${acceptation}`)
        );
      case "close":
        return toggleModal();
      case "card":
        return (
          setChosenPayment((chosenPayment = 1)),
          console.log(`Hello I'm card the #${chosenPayment}`)
        );
      case "paypal":
        return (
          setChosenPayment((chosenPayment = 2)),
          console.log(`Hello I'm Paypal the #${chosenPayment}`)
        );
      case "google":
        return setChosenPayment(
          (chosenPayment = 3),
          console.log(`Hello I'm Google the #${chosenPayment}`)
        );
      default:
        return;
    }
  };

  //IT TOGGLES THE CARD FORM AND SELECTS A PAYMENT
  const chosePayment = (event, id) => {
    console.log(id);
    if (id !== 1) {
      setChoseCard((chosedCard = false));
    } else {
      setChoseCard((chosedCard = true));
    }
    handleClick(event);
  };

  //IT CHANGES STYLE IF INPUT AND CHECK ARE EMPTY
  const checkInput = (event) => {};

  const resetState = () => {
    setCard({
      email: "",
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    });
    setChoseCard(true);
    setChosenPayment(1);
    setAcceptation(false);
    setValidation(false);
  };

  //IT SUBMITS THE DATA TO THE API
  const handleSubmit = (event) => {
    event.preventDefault();
    setValidation((validation = true));
    console.log("validation is " + validation);

    if (acceptation && validation && chosenPayment !== 1) {
      if (chosenPayment === 2) {
        console.log("I paid with my paypal account.");
      } else {
        console.log("I paid with my google pay account.");
      }
      resetState();
    } else if (acceptation && validation && chosenPayment === 1) {
      let errorMessage = "Vous avez oublié de renseigner: ";
      let arrayError = [];

      for (let index in card) {
        if (card[index].length === 0) {
          arrayError.push(index);
        }
      }

      if (0 in arrayError) {
        for (let i = 0; i < arrayError.length; i++) {
          errorMessage = errorMessage + arrayError[i].toString() + ", ";
        }
        errorMessage = errorMessage.slice(0, -2);
        return alert(errorMessage);
      } else {
        console.log("I paid with my visa.");
        resetState();
      }
    }
  };

  //IT DISPLAYS THE BUTTONS TO CHOSE THE MEAN OF PAYMENT
  const paymentsButton = meansPayments.map((index) => {
    return (
      <button
        id={index.name}
        className={index.className}
        key={index.id}
        onClick={(event) => chosePayment(event, index.id)}
      >
        {index.name}
      </button>
    );
  });

  //IT DISPLAYS THE FORM COMPONENT IF THE USER CHOSES CARD OPTION
  const displayCardForm = chosedCard ? (
    <FormCard card={card} setCard={setCard} />
  ) : (
    ""
  );

  return (
    <div className="wrapper">
      <div className="payment-backdrop" />
      <div className="payment">
        <div className="payment-logo">
          <p>N</p>
        </div>
        <h2>Payment Card</h2>
        <h4>Total: {price}€</h4>
        <div className="card-grp space">{paymentsButton}</div>
        {displayCardForm}
        <div>
          <input
            type="checkbox"
            id="acceptation"
            className="space"
            onClick={handleClick}
          />
          <span className="payment-cgv">
            J'accepte les conditions de Nexway
          </span>
        </div>
        <button
          type="submit"
          id="validation"
          className="payment-btn"
          onClick={handleSubmit}
        >
          Pay {price}€
        </button>
      </div>
    </div>
  );
}
