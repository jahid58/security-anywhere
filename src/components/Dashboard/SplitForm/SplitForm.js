import React, { useEffect, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitForm = ({ client }) => {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [hiredServiceInfo, setHiredServiceInfo] = useState({});
  const [error, setError] = useState("");

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

   if(payload.paymentMethod){
    setHiredServiceInfo({
      id: payload.paymentMethod.id,
      ...client,
      card: payload.paymentMethod.card,
    });
      history.push("/hiringList");
   }else{
      setError(payload.error.message)
    }
    
  };
  useEffect(() => {
    if (hiredServiceInfo.id) {
      fetch("https://fierce-garden-72152.herokuapp.com/addHiredService", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(hiredServiceInfo),
      }).then((res) => console.log(res));
    }
  }, [hiredServiceInfo]);

  return (
    <form onSubmit={handlePayment}>
      <label>
        Card number
        <CardNumberElement options={options} />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement options={options} />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement options={options} />
      </label>
      <br />
      <button
        type="submit"
        disabled={!stripe}
        className="p-1 btn text-white"
        style={{ width: "150px", backgroundColor: "blueviolet" }}
      >
        Pay
      </button>
     
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default SplitForm;
