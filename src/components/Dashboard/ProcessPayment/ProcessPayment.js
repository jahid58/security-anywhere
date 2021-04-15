import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitForm from '../SplitForm/SplitForm';
const ProcessPayment = ({client}) => {
    const stripePromise = loadStripe('pk_test_51IfgAUCI1nFZnWzzRdnAzBsuocsznkBGMSmbUaVJVKLRgrSQNKwPDFclJAclcnF0UJHAb7erFBNGVATlaL7BO2eO00whflvXwS')
    return (
        <Elements stripe={stripePromise}>
        <SplitForm client={client}></SplitForm>
      </Elements>
    );
};

export default ProcessPayment;