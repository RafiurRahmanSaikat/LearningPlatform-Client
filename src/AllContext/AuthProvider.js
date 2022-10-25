import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../Firebase/Firebase.init';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const SignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const AuthInfo = { SignUp, login }

    return (

        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;