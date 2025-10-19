import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import LoadingPage from '../components/LoadingPage';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    // console.log(user)
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }
    const updateUser = (currentUser, userObj) => {
        return updateProfile(currentUser, userObj)
    }
    const resetUserPass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    // google login 
    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    // gitHub login 
const gitHubLogin = ()=>{
        return signInWithPopup(auth,gitHubProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe
    }, [])

    const value = {
        creatUser,
        logInUser,
        logOutUser,
        user, 
        setUser,
        updateUser,
        loading,
        setLoading,
        resetUserPass,
        googleLogin,
        gitHubLogin
    }
    return <AuthContext value={value}>
        {loading ? <LoadingPage/> : children}
    </AuthContext>

};

export default AuthProvider;