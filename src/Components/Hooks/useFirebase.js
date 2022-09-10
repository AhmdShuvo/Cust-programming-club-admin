import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/FirebaseInitialize";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword,updateProfile,signInWithPopup, GoogleAuthProvider } from "firebase/auth";





initializeFirebase()

const useFirebase=()=>{

  const [error,setError]=useState('')
  const[isLoading,setIsLoadng]=useState(true)
  const [admin,setIsAdmin]=useState(false)

    const [user,setUser]=useState({})
    const auth=getAuth();




// LogOUt User //

const LogOUt=()=>{

    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        setError(error.message)
        // An error happened.
      });
}


 
// Sign IN user ///
const Login=(email,password)=>{
 

  return  signInWithEmailAndPassword(auth, email, password)
  
  
}
     

useEffect(()=>{

  fetch(`http://localhost:9000/user/admin/${user.email}`).then(res=>res.json()).then(data=>setIsAdmin(data.admin))

},[user.email])
 

// Observer ///
useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUser(user)
          setIsLoadng(false)
          // ...
        } else {
            setUser({})
          // User is signed out
          // ...
          
        }
      });
      return ()=>unSubscribe;
},[])



     

    return {user,LogOUt,Login,error,setError,isLoading,setIsLoadng,admin}
}


export default useFirebase;