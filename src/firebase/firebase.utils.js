import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBv68UYLQwo_PR7EZCE3K-hWNkUMru1MCU",
  authDomain: "crwn-db-4ae85.firebaseapp.com",
  databaseURL: "https://crwn-db-4ae85.firebaseio.com",
  projectId: "crwn-db-4ae85",
  storageBucket: "crwn-db-4ae85.appspot.com",
  messagingSenderId: "695355752212",
  appId: "1:695355752212:web:a9f940e30c66d4a3278c01",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating issue", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
