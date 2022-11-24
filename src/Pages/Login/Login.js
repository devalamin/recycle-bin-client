import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaGithub, FaGit } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const googleProvider = new GoogleAuthProvider();

    const { register, handleSubmit } = useForm();
    const { userLogin, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'


    const handleLogin = (data) => {
        setLoginError('')
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoginError(error.message)

            })
        console.log(data);

    }

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className='sm:h-[600px] flex sm:w-96 mx-auto rounded-md p-10 bg-lime-200 items-center justify-center mb-5'>
            <div>
                <h2 className='sm:text-2xl font-bold text-center text-lime-900'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full" type='email' {...register("email")} placeholder="Your Email" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full" type='password' {...register("password")} placeholder="Password" />

                    </div>
                    <div>
                        <p>{loginError}</p>
                    </div>
                    <input className='w-full mt-5 text-white btn bg-slate-700' type="submit" value='Login' />
                </form>
                <div className="divider"></div>
                <div className='flex justify-between'>
                    <button onClick={handleGoogleLogin} className='btn border-0 sm:w-20 bg bg-slate-900 '><FaGoogle className='text-2xl font-bold' /></button>
                    <button className='btn border-0 sm:w-20 bg bg-slate-900 '><FaGithub className='text-2xl font-bold' /></button>
                </div>
                <div className='mt-5 text-start'>
                    <p className='text-black'>Don't Have An Account?<Link to='/register'><span className='text-lime-800 underline'>Create</span></Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;