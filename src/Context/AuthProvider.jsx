import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(user)
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }
    const updateUser = (currentUser,userObj)=>{
        return updateProfile(currentUser, userObj)
    }
    useEffect(() => {
      const unsubscribe=  onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser);
           setLoading(false);
        });
        return unsubscribe
    }, [])

    const value = { creatUser, logInUser, logOutUser,user,setUser,updateUser,loading,setLoading }
    return <AuthContext value={value}>
        {loading?"loading":children}
    </AuthContext>

};

export default AuthProvider;