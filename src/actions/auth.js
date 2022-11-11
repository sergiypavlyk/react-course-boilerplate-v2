import { googleAuthProvider } from '../firebase/firebase';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth();

export const startLogin = () => {
  return () => signInWithPopup(auth, googleAuthProvider);
};

export const startLogout = () => {
  return () => signOut(auth);
}
