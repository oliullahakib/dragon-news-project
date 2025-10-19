import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
        });
    }, [])

    const value = { creatUser, logInUser, logOutUser,user }
    return <AuthContext value={value}>
        {children}
    </AuthContext>

};

export default AuthProvider;