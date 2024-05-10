import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase-config";
export const authContex = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const registerWithPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInWithPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
      // setLoading(false);
    });

    // return ()=>unSubscriber();
  }, []);

  const authInfo = {
    user,
    registerWithPassword,
    SignInWithPassword,
    logout
  };
  return <authContex.Provider value={authInfo}>{children}</authContex.Provider>;
};

export default AuthProvider;
