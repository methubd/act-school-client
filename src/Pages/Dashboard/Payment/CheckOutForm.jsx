import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckOutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        if(!stripe || !elements){
            
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card', 
            card
        })

        if(error){
            console.log('error', error.message);
            setCardError(error.message)
        }
        else{
            console.log('method', paymentMethod);
            setCardError('')
        }

        console.log('card', card);
    }
    return (
        <>
            <form className="md:w-2/3 mx-auto p-10 rounded-lg bg-gray-50 my-10 text-center" onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="px-5 mt-10 bg-gray-800 text-white py-1 rounded-lg" type="submit" disabled={!stripe}>
                Pay
            </button>
            </form>
            {cardError && <p className="text-center text-red-500"><small>{cardError}</small></p>}
        </>
    );
};

export default CheckOutForm;