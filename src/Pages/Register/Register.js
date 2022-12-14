import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Register = () => {

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const { register, handleSubmit } = useForm();
    const { createNewUser, googleLogin, updateUserProfile } = useContext(AuthContext);
    const [registerError, SetRegisterError] = useState('');
    const [registeredUserEmail, setRegisteredUserEmail] = useState('')
    const [token] = useToken(registeredUserEmail)

    if (token) {
        navigate('/')
    }


    const handleRegister = data => {
        SetRegisterError('')
        createNewUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                };
                updateUserProfile(userInfo)
                    .then(() => {
                        saveAllUserToDb(data.name, data.email, data.account_type)

                    })
                    .catch(error => console.error(error))

                if (user?.uid) {
                    toast.success(`${data.account_type} Account Created Successfully`)

                }
                console.log(user);
            })
            .catch(error => {
                SetRegisterError(error.message)
                console.error(error)
            })

    };

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                saveAllUserToDb(user?.displayName, user?.email);
                setRegisteredUserEmail(user?.email)
            })
            .catch(error => {
                console.log(error);
            })
    };

    const saveAllUserToDb = (name, email, account_type) => {
        const user = {
            name,
            email,
            account_type,
        }

        fetch('https://recycle-bin-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRegisteredUserEmail(email)
            });
    };




    return (
        <div className='sm:h-[700px] flex sm:w-8/12 mx-auto rounded-md bg-gradient-to-r from-cyan-300 to-cyan-800 items-center justify-center mb-5'>
            <div className='sm:w-8/12'>
                <h2 className='text-2xl my-5 font-bold text-center text-lime-900'>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <label className="label">
                        <span className="label-text">Account Type</span>
                    </label>
                    <select required {...register('account_type')} className="select select-bordered w-full">
                        <option value='buyer'>Buyer</option>
                        <option value='seller'>Seller</option>
                    </select>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-full" required type='text' {...register("name")} placeholder="Your Name" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required className="input input-bordered w-full" type='email' {...register("email")} placeholder="Your Email" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required className="input input-bordered w-full" type='password' {...register("password")} placeholder="Password" />

                    </div>
                    <div>
                        <p className='text-red-500'>{registerError}</p>
                    </div>
                    <input className='w-full mt-5 text-white btn bg-slate-700' type="submit" value='Register' />
                </form>
                <div className="divider"></div>
                <div className='flex justify-center space-x-3'>
                    <button onClick={handleGoogleLogin} className='btn border-0 w-20 bg bg-slate-900 '><FaGoogle className='text-2xl font-bold' /></button>
                    <button className='btn border-0 w-20 bg bg-slate-900 '><FaGithub className='text-2xl font-bold' /></button>
                </div>
                <div className='mt-5 text-start'>
                    <p className='text-black'>Already Have An Account?<Link to='/login'><span className='text-lime-800 underline'>Login</span></Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;