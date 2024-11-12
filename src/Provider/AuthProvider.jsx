import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Sign out
  const userSignOut = () => {
    return signOut(auth);
  };

  //   currently user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user", currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
