import React from 'react';
import { Link } from 'react-router';

const Login = () => {
   const handleLogin =(e)=>{
        e.preventDefault()
        const email = e?.target?.email?.value
        const password = e?.target?.password?.value
      
        console.log("submite login",{email,password})
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
                            <label className="label">Password</label>
                            <input required name='password' type="password" className="input w-full" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-primary mt-4">Login</button>
                            <p className='text-sm mt-3' >Don't Have an Account? Please <Link to="/auth/register" className='text-secondary hover:font-bold'>Register</Link> </p>
                        </form>
                    </div>
                </div>
    );
};

export default Login;