import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContex';
import { toast } from 'react-toastify';

const Register = () => {
    const {creatUser}=use(AuthContext)
    const handleRegister =(e)=>{
        e.preventDefault()
        const name = e?.target?.name?.value
        const photo = e?.target?.photo?.value
        const email = e?.target?.email?.value
        const password = e?.target?.password?.value
      creatUser(email,password)
      .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    toast.success("User Created Successfully")
    console.log("submite register",{name,photo,email,password,user})
  })
  .catch((error) => {
    const errorCode = error.code;
    toast.error(errorCode)
  });
    }
    return (
        <div className="hero  min-h-screen">
                    <div className="card-body bg-base-100 p-20">
                        <h1 className="text-4xl font-semibold py-8 border-b-1 border-base-200">Register your account</h1>
                        <form onSubmit={handleRegister} className="fieldset mt-5">
                            {/* name */}
                            <label className="label">Name</label>
                            <input required name='name' type="text" className="input w-full" placeholder="Name" />
                            {/* Photo */}
                            <label className="label">Photo URL</label>
                            <input required name='photo' type="text" className="input w-full" placeholder="Photo URL" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input required name='email' type="email" className="input w-full" placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input required name='password' type="password" className="input w-full" placeholder="Password" />
                            <button type='submit' className="btn btn-primary mt-4">Register</button>
                            <p className='text-sm mt-3'>Already Have an Account? Please <Link to="/auth/login" className='text-secondary hover:font-bold'>Login</Link> </p>
                        </form>
                    </div>
                </div>
    );
};

export default Register;