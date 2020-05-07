import React, { Fragment } from "react";
import { default as InputMask } from "react-number-format";

export default function FormCard({ card, setCard }) {
  //IT UPDATES THE STATE WITH THE INPUTS VALUES
  const handleChange = (event) => {
    setCard({ ...card, [event.target.id]: event.target.value });
  };

  //IT'S ONLY RETURNED IF THE CHOSEN PAYMENT IS CARD
  return (
    <Fragment>
      <form className="form">
        <label htmlFor="email" className="label">
          <span className="label-name"></span>
        </label>
        <div className="card-style space">
          <input
            type="text"
            className="input"
            id="email"
            placeholder="Email"
            value={card.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="card-style space">
          <label htmlFor="name" className="label">
            <span className="label-name"></span>
          </label>
          <input
            type="text"
            className="input"
            id="name"
            placeholder="Nom"
            value={card.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="card-style space">
          <label className="label" htmlFor="cardNumber">
            <span className="label-name"></span>
          </label>
          <InputMask
            type="text"
            className="input"
            id="cardNumber"
            placeholder="Numéro de carte"
            format="#### #### #### ####"
            value={card.cardNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="card-grp space">
          <div className="card-item">
            <label className="label" htmlFor="month">
              <span className="label-name"></span>
            </label>
            <InputMask
              type="text"
              className="input"
              format="##"
              id="month"
              placeholder="MM"
              value={card.month}
              onChange={handleChange}
              required
            />
          </div>

          <div className="card-item">
            <label className="label" htmlFor="year">
              <span className="label-name"></span>
            </label>
            <InputMask
              type="text"
              className="input"
              format="##"
              id="year"
              placeholder="YY"
              value={card.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="card-item">
            <label className="label" htmlFor="cvc">
              <span className="label-name"></span>
            </label>
            <InputMask
              type="text"
              className="input"
              format="###"
              id="cvc"
              placeholder="cvc"
              value={card.cvc}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
}
