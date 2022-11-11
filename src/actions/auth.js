import { googleAuthProvider } from '../firebase/firebase';
import { getAuth, signInWithPopup } from "firebase/auth";


export const startLogin = () => {
  return () => {
    const auth = getAuth();
    return signInWithPopup(auth, googleAuthProvider);
  };
};
