import { googleAuthProvider } from '../firebase/firebase';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth();

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => signInWithPopup(auth, googleAuthProvider);
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => signOut(auth);
}
