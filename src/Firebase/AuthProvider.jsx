import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase-config";
export const authContex = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
   const googleProvider = new GoogleAuthProvider();
   const [loading,setLoading]=useState(true)
   
   
   
  const registerWithPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInWithPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    //  const unSubscriber =
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // return ()=>unSubscriber();
  }, []);

  const authInfo = {
    user,
    registerWithPassword,
    SignInWithPassword,
    googleSignIn,
    logout,
    loading
  };
  return <authContex.Provider value={authInfo}>{children}</authContex.Provider>;
};

export default AuthProvider;
