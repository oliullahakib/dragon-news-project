import React from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const value = {creatUser}
    return <AuthContext value={value}>
        {children}
    </AuthContext>

};

export default AuthProvider;