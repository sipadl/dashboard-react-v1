import React from 'react';
import '../Lib/Payment.css' // import the CSS file

export default function PaymentMethod() {
  return (
    <div className="payment-method-container">
      <div className="payment-method-column">
        <label className="radio-container">
          <input type="radio" name="payment" value="debit" />
          <span className="slider"></span> Debit
        </label>

        <label className="radio-container">
          <input type="radio" name="payment" value="credit" />
          <span className="slider"></span> Kredit
        </label>

        <label className="radio-container">
          <input type="radio" name="payment" value="qris" />
          <span className="slider"></span> QRIS
        </label>
      </div>

      <div className="payment-method-column">
        <label className="radio-container">
          <input type="radio" name="payment" value="debit_contactless" />
          <span className="slider"></span> Debit Contactless
        </label>

        <label className="radio-container">
          <input type="radio" name="payment" value="credit_contactless" />
          <span className="slider"></span> Kredit Contactless
        </label>

        <label className="radio-container">
          <input type="radio" name="payment" value="ewallet" />
          <span className="slider"></span> E-Wallet
        </label>
      </div>
    </div>
  );
}
