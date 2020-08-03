import axios from "axios";
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const currency = "aud";
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gt6q6GbwhL4ssjAOmhexPixnGnyCtHZ1gpN49BLnps0JgqDVCo61q4xDdGrnfbSCqS3szmJJb65ZUMqaX8lQ8yh00pLZxDlsY";

  const onToken = (token) => {
    // console.log(token);
    // alert("Payment Successful");
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
        currency: currency,
      },
    })
      .then((response) => {
        alert("Payment successful", response);
      })
      .catch((error) => {
        console.log("Payment error:", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      currency={currency}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
