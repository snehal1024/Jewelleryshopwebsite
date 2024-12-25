import React from 'react'
import './PaymentGateway.css'

const PaymentGateway = () => {

  return (
    <div className="paymentgateway">
        <div classname="payment-container">
            <div className="payment-fields">
             <h1>Payment Gateway</h1>
                <label for="card-name">Cardholder Name</label>
                <input type="text" id="card-name" name="card-name" placeholder="Enter cardholder name" required/>
                <label for="card-number">Card Number</label>
                <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required/>
                <label for="expiry-date">Expiry Date</label>
                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />
                <label for="cvv">CVV</label>
                <input type="password" id="cvv" name="cvv" placeholder="123" required />
                <button type="submit" class="btn">Pay Now</button>
                <p classname="secure-text">Your payment is secure and encrypted.</p>
            </div>
      </div>
  </div>
  )
}

export default PaymentGateway