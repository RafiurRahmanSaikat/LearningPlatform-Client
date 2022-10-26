import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const SignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOut = () => {
        return signOut(auth);
    }
    const GoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const GithubLogIn = () => {
        return signInWithPopup(auth, gitProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
         
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();

    }, [])

    const setProfile = (userData) => {

        return updateProfile(auth.currentUser, userData)


    }

    const AuthInfo = { SignUp, login, LogOut, user, setProfile, loading, GoogleSignIn,GithubLogIn }

    return (

        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;