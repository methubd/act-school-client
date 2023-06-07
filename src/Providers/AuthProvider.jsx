import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        googleLogin,
        logOut
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Logged User', currentUser);
        })
        return () => {
           return unsubscribe();
        }
    }, [])


    return (
        <AuthContext.Provider value={authInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;