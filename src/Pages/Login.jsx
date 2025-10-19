import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContex';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();
    const { logInUser } = use(AuthContext);
    const [show, setShow] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e?.target?.email?.value
        const password = e?.target?.password?.value
        logInUser(email, password)
            .then((res) => {
                toast.success("Login Successfully")
                console.log(res.user)
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)
            });

        console.log("submite login", { email, password })
    }
    return (
        <div className="hero  min-h-screen">
            <div className="card-body bg-base-100 p-20">
                <h1 className="text-4xl font-semibold py-8 border-b-1 border-base-200">Login your account</h1>
                <form onSubmit={handleLogin} className="fieldset mt-5">
                    {/* email */}
                    <label className="label">Email</label>
                    <input required name='email' type="email" className="input w-full" placeholder="Email" />
                    {/* password */}
                    <div className='relative'>
                        <label className="label">Password</label>
                        <input required name='password' type={show ? "text" : "password"} className="input w-full" placeholder="Password" />
                        <span className='btn btn-xs absolute top-6 right-3 ' onClick={() => setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-primary mt-4">Login</button>
                    <p className='text-sm mt-3' >Don't Have an Account? Please <Link to="/auth/register" className='text-secondary hover:font-bold'>Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;