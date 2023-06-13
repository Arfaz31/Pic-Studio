import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';

const CheckOutForm = ({enrollItem}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext)
    const [axiosSecure] = UseAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const {availableSeat, classItemId, className, image, instructorName, _id, price}=  enrollItem


    useEffect(()=>{
       axiosSecure.post('/create-payment-intent', {price})
       .then(res=>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
       })
    },[])

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }
        
          const card = elements.getElement(CardElement)
          if(card === null){
            return;
          }
          console.log(card)
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          })
          if(error){
            console.log('error', error)
            setCardError(error.message)
          }
          else{
            setCardError('')
            console.log('paymentMethod', paymentMethod)
          }

          setProcessing(true)
          const {paymentIntent, error:paymentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                 email: user?.email || 'anonymouse',
                 name: user?.name || 'anonymouse'
                },
              },
            },
          );

          if(paymentError){
            console.log(paymentError)
          }

          console.log(paymentIntent)
          setProcessing(false)
          if(paymentIntent.status === "succeeded"){
            const transactionId= paymentIntent.id;
            const payment= {
              email:user?.email,
              transactionId,
              price,
              availableSeat, 
              classItemId, 
              className, 
              image, 
              instructorName,
              paymentClassId:_id
            }
            axiosSecure.post("/payment", payment)
            .then(res=>{
              console.log(res.data)
            })
          }
      
    }

    return (
       <>
        <form className='w-full mt-10' onSubmit={handleSubmit}>
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
      <button className="btn btn-primary ml-60 btn-xs mt-6" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
      {cardError && <p className='text-red-500'>{cardError}</p>}
       </>
    );
};

export default CheckOutForm;