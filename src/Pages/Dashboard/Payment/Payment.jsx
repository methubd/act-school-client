import React from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK)
const Payment = () => {
    return (
        <div className='h-screen w-full'>
            <h1 className="text-xl text-gray-500 py-5 bg-gray-100 text-center ">Please Process Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;