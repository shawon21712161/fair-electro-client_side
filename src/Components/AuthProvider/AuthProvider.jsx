import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // google button
  const googleButton = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github button
  const gitHubButton = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  //   create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   handle logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   observer auth satate change
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      // console.log("current value of the user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscriber();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    googleButton,
    gitHubButton,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
