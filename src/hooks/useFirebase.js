import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase=()=>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
           console.log('logout click');
           setUser({})
        })
        .catch(error=>{
            setError(error.message);
        })
    };

    //observe user state change or not =>
    useEffect(()=>{
        onAuthStateChanged (auth, (user)=>{
            if(user){
               setUser(user) ;
            }
        })

    },[])

    return {
        user,
        error,
        logOut,
        signInUsingGoogle

    }


}

export default useFirebase;