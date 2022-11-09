import React,{ createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext= createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

const UserContext = ({children}) => {
    const [user,setUser]=useState(null);
    const[loader,setLoader]=useState(true);
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logInWithGoogle=()=>{
        return signInWithPopup(auth, provider)
    }
    const logInWithGitHub=()=>{
        return signInWithPopup(auth, providerGit)
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoader(false);
        })
        return ()=>unSubscribe();
    },[])
    const authInfo={user,signUp,logIn,logInWithGoogle,logInWithGitHub,logOut,loader}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;