import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext=createContext()
const auth=getAuth(app);

const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);

    const googleSignIn=()=>{
        const googleProvider=new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
    }

    const gitHubSignIn=()=>{
        const githubProvider=new GithubAuthProvider()
        signInWithPopup(auth,githubProvider)
    }
    
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect( ()=>{
         const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log('logged in user inside auth state observer',loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    })

    const authInfo={user,createUser,signIn,logOut,googleSignIn,gitHubSignIn,loading}

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );


};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider