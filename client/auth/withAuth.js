import React, {useEffect} from 'react';
import { getAuth } from "firebase/auth";
import firebaseApp from '../config';

const auth = getAuth(firebaseApp)

export const withAuth = Component => props => {
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (!authUser) {
                console.warn("user is not authenticated")
            }
        });
    }, []);

    return (
        <Component {...props} />
    );
}
