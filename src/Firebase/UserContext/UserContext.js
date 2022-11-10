import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'
import app from '../Firebase.config';
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider()


export const UserContextApi = createContext('') 
const UserContext = ({children}) => {
  // seeting loading for user info
  const [loading ,setLoading] = useState(true)
  // seeting user to the state
  const [user, setUser] = useState();
  // geeting auth from firebase
  const auth = getAuth(app)

// Implementing sign in method

// jwt


              // Handling user signup with name and photo
  const update = (props) =>{
   return updateProfile(auth.currentUser,props)
  }
              // GOOGLE
  const signupUpWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth,provider);
  }

              // Email and password
  const signUpWithEmailandPass = (email,pass)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,pass);
  }

              // Github
  const githubsignUp = () =>{
    setLoading(true);
    return signInWithPopup(auth,gitprovider);

  }

              // Log in
  const logInWithEmail = (email,pass)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,pass);
  }

          // Signout
  const Logout = () =>{
    return signOut(auth)
  }

  // getting user auth info and seeting it to user
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false)
    })
    return ()=>unsubscribe()
  },[auth])
  // Context values
  const values = {loading
                  ,user,
                  signupUpWithGoogle,
                  signUpWithEmailandPass,
                  logInWithEmail,
                  githubsignUp,
                  Logout,
                  update

                  
                }
               
    return (
       <UserContextApi.Provider value={values}>
         {children}
       </UserContextApi.Provider>
    );
};

export default UserContext;