import React from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOutUser = ()=>{
       return signOut(auth)
    }
    const value = {creatUser,logInUser,logOutUser}
    return <AuthContext value={value}>
        {children}
    </AuthContext>

};

export default AuthProvider;