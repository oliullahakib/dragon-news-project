import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContex';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { creatUser, updateUser,setUser } = use(AuthContext);
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [passError, setPassError] = useState('');
    const [nameError, setNameError] = useState('');
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e?.target?.name?.value;
        if(name.length<5) return setNameError("Name Should be Atlest 5 Charecters.")
        const photo = e?.target?.photo?.value
        const email = e?.target?.email?.value
        const terms = e?.target?.terms.checked;
        if(!terms) return alert("Please Accept Our Terms and Conditions.")
        const password = e?.target?.password?.value;

        // varify password 
        const charCheckRegex = /^.{6,}$/;
        if(!charCheckRegex.test(password)) return setPassError("Minimum 6 characters Needed");
        const caseCheckRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if(!caseCheckRegex.test(password)) return setPassError('One uppercase and one lowercase letter Needed');
        const specialCharRegex = /^(?=.*[!@#$%^&*]).+$/;
        if(!specialCharRegex.test(password)) return setPassError("One special character Needed");

        // logIn user 
        creatUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // setLoading(true)
                // update user 
                const userObj = {
                    displayName: name,
                    photoURL: photo
                }
                updateUser(user, userObj)
                    .then(() => {
                        toast.info("User Updated")
                        setUser({ ...user, displayName: name, photoURL: photo });
                        // setLoading(false);
                        navigate("/")
                    }).catch((error) => {
                        toast.error(error)
                    });
                toast.success("User Created Successfully")
                
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
                    <p className='text-secondary'>{nameError}</p>
                    {/* Photo */}
                    <label className="label">Photo URL</label>
                    <input required name='photo' type="text" className="input w-full" placeholder="Photo URL" />
                    {/* email */}
                    <label className="label">Email</label>
                    <input required name='email' type="email" className="input w-full" placeholder="Email" />
                    {/* password */}
                    <div className='relative'>
                        <label className="label">Password</label>
                        <input required name='password' type={show ? "text" : "password"} className="input w-full" placeholder="Password" />
                        <span className='btn btn-xs absolute top-6 right-3 ' onClick={() => setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye />}</span>
                        <p className='text-secondary'>{passError}</p>
                    </div>
                    {/* terms and conditions  */}
                    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                        <legend className="fieldset-legend">Terms & Conditions</legend>
                        <label className="label">
                            <input name='terms' type="checkbox"  className="checkbox" />
                            Click me
                        </label>
                    </fieldset>
                    <button type='submit' className="btn btn-primary mt-4">Register</button>
                    <p className='text-sm mt-3'>Already Have an Account? Please <Link to="/auth/login" className='text-secondary hover:font-bold'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;