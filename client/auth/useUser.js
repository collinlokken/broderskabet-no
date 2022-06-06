import 'regenerator-runtime/runtime'

import {useState, useEffect} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from '../config';
import {
    removeUserCookie,
    setUserCookie,
    getUserFromCookie
} from './userCookie';

const auth = getAuth(firebaseApp)

export const mapUserData = async user => {
    const { uid, email } = user;
    const token = await user.getIdToken(true);
    return {
        id: uid,
        email,
        token
    };
};


const useUser = () => {
    const [user, setUser] = useState();

    const logout = async (callback) => {
        return auth
            .signOut()
            .then(
                callback
            )
            .catch(e => {
                console.error(e);
            })
    };

    useEffect(() => {
        const cancelAuthListener = auth
            .onIdTokenChanged(async userToken => {
                if (userToken) {
                    const userData = await mapUserData(userToken);
                    setUserCookie(userData);
                    setUser(userData);
                } else {
                    removeUserCookie();
                    setUser();
                }
            });
        const userFromCookie = getUserFromCookie();
        if (!userFromCookie){
            return;
        }
        setUser(userFromCookie);
        return () => cancelAuthListener;
    }, []);

    return {user, logout};
};

export { useUser };