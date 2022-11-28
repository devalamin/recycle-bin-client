import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const newTime = new Date();

    const handleAddProduct = (data) => {


        fetch('https://recycle-bin-server.vercel.app/dashboard/addingproducts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.acknowledged) {
                    toast.success('Product Added Successfully');
                    navigate('/dashboard/myproducts')
                }

            })

    }


    return (
        <div className='py-10 flex sm:w-8/12 mx-auto rounded-md bg-slate-700 items-center justify-center mb-5'>
            <div className='sm:w-8/12'>
                <h2 className='text-2xl my-5 font-bold text-center text-white'>Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <label className="label">
                        <span className="label-text text-white">Product Category</span>
                    </label>
                    <select required {...register('category_id')} className="select select-bordered w-full">
                        <option value='01'>01</option>
                        <option value='02'>02</option>
                        <option value='03'>03</option>
                    </select>
                    <label className="label">
                        <span className="label-text text-white">Product Condition</span>
                    </label>
                    <select required {...register('condition')} className="select select-bordered w-full">
                        <option value='new'>New</option>
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                        <option value='used'>Used</option>
                    </select>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Time</span>
                        </label>
                        <input defaultValue={newTime} className="input input-bordered w-full" required type='text' {...register("time")} placeholder="Time" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Products Model Name</span>
                        </label>
                        <input className="input input-bordered w-full" required type='text' {...register("model")} placeholder="Product Model" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Products Photo Link</span>
                        </label>
                        <input className="input input-bordered w-full" required type='text' {...register("picture")} placeholder="Photo Link" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Year Of Purchase</span>
                        </label>
                        <input required className="input input-bordered w-full" type='text' {...register("purchasing_year")} placeholder="Purchasing Year" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Resale Price</span>
                        </label>
                        <input required className="input input-bordered w-full" type='text' {...register("resale_price")} placeholder="Resale Price" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Original Price</span>
                        </label>
                        <input required className="input input-bordered w-full" type='text' {...register("original_price")} placeholder="Original Price" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Using Duration <small>(In Years)</small></span>
                        </label>
                        <input required className="input input-bordered w-full" type='text' {...register("using_duration")} placeholder="Duration" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Seller Name/Shop Name</span>
                        </label>
                        <input required className="input input-bordered w-full" type='text' {...register("seller_name")} placeholder="Seller Name" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Mobile Number</span>
                        </label>
                        <input required className="input input-bordered w-full" type='text' {...register("phone")} placeholder="Phone" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Your Email</span>
                        </label>
                        <input required defaultValue={user?.email} className="input input-bordered w-full" type='email' {...register("email")} placeholder="Email" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Location</span>
                        </label>
                        <input required className="input input-bordered w-full" type='text' {...register("location")} placeholder="Location" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">About This Product</span>
                        </label>
                        <input required className="input input-bordered w-full" type='text' {...register("description")} placeholder="Description" />

                    </div>

                    <input className='w-full mt-5 text-white btn bg-teal-700' type="submit" value='Add This Product' />
                </form>



            </div>
        </div>
    );
};

export default AddProducts;