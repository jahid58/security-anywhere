import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SplitForm from '../SplitForm/SplitForm';
const ProcessPayment = ({client}) => {
    const stripePromise = loadStripe('pk_test_51IhUVzCuMIxcgL0nH4mQiZCffgLy52bVsgT2MJ0pDpMZQZQwr17b12T91XK8qLO4ihgBJmAIrPfU6qbDQT5ODlug00Swrnr6Nu')
    return (
        <Elements stripe={stripePromise}>
        <SplitForm client={client}></SplitForm>
      </Elements>
    );
};

export default ProcessPayment;