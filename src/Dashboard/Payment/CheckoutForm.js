import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ product }) => {

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe()
    const elements = useElements()
    const { productPrice, email } = product;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [productPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccess('')
        setTransactionId('')

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: product.CustomerName,
                        email: product.email
                    },
                },
            },
        );

        if (confirmError) {
            return;
        }
        if (paymentIntent.status === "succeeded") {
            toast.success('Payment Successful')
            setSuccess('Congrats! Payment Completed')
            setTransactionId(paymentIntent.id);

            const payment = {
                productPrice,
                email,
                transactionID: paymentIntent.id,
                bookingId: product._id

            }

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! Payment Completed')
                        setTransactionId(paymentIntent.id);
                    }
                    console.log(data);
                });
        }

    }

    return (
        <form onSubmit={handleSubmit}>
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
            <div className='text-center'>
                <button className='mt-6 btn btn-sm btn-wide my-6' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <h3 className='text-red-500 mt-2'>{cardError}</h3>
            </div>
            <div>
                {transactionId && <p className='text-green-600'>{success}</p>}
                {transactionId && <p>{`Your transaction id: ${transactionId}`}</p>}
            </div>
        </form>
    );
};

export default CheckoutForm;