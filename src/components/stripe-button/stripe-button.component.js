import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gt6q6GbwhL4ssjAOmhexPixnGnyCtHZ1gpN49BLnps0JgqDVCo61q4xDdGrnfbSCqS3szmJJb65ZUMqaX8lQ8yh00pLZxDlsY";

  const onToekn = (token) => {
    console.log(token);
    alert("Payment Successful");
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
      token={onToekn}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
