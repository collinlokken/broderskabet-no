import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from '../config';
import { setUserCookie, getUserFromCookie } from '../auth/userCookie';
import { mapUserData } from '../auth/useUser';


const auth = getAuth(firebaseApp)
const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl,
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
    }
  }
});

const FirebaseAuth = () => {
  const signInSuccessUrl = "/#/logout"
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
        firebaseAuth={auth}
        signInSuccessUrl={signInSuccessUrl}
      />
    </div>
  );
};

export default FirebaseAuth;