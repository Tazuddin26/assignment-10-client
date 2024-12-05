import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const GoogleAuth = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, GoogleAuth);
  }



  const signOutUser = () => {
    return signOut(auth);
  }
  const profileManage = (name, image) => {
    setLoading(true); 
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
  }

  useEffect(() => {
    const disconnect = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Current user loggedin");
        setUser(currentUser);
      } else {

        setUser(null);
      }
      setLoading(false);
       return () => {
         disconnect();
       };
    });
   
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    profileManage,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
