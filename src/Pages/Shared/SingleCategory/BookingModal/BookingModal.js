import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ bookingProduct }) => {
    const { user } = useContext(AuthContext)
    const { model, resale_price, picture } = bookingProduct;


    const handlePurchaseProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const CustomerName = form.CustomerName.value
        const email = form.email.value;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const phone = form.phone.value;

        // console.log(CustomerName, email, productName, productPrice, phone, picture);


        const orderInfo = {
            picture,
            CustomerName,
            email,
            productName,
            productPrice,
            phone

        }

        fetch('http://localhost:5000/purchasedproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Successfully Purchased ${model} for $ ${resale_price}`)
                }
                console.log(data);
            })

    }


    return (
        <>

            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{model}</h3>
                    <form onSubmit={handlePurchaseProduct}>
                        <input name='CustomerName' readOnly defaultValue={user?.displayName} type="text" placeholder="Type here" className="my-3 input input-bordered input-warning w-full" />
                        <input name='email' readOnly defaultValue={user?.email} type="email" placeholder="Type here" className="my-3 input input-bordered input-warning w-full" />
                        <input name='productName' readOnly defaultValue={model} type="text" placeholder="Type here" className="my-3 input input-bordered input-warning w-full" />
                        <input name='productPrice' readOnly defaultValue={`$ ${resale_price}`} type="text" placeholder="Type here" className="my-3 input input-bordered input-warning w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="my-3 input input-bordered input-warning w-full" />
                        <input name='' type="text" placeholder="Where To Meet?" className="my-3 input input-bordered input-warning w-full" />
                        <input type="submit" value="Purchase" className='btn w-full' />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;