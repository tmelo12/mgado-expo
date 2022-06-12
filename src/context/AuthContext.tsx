import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

type User = {
    email: string;
    family_name: string;
    given_name: string;
    name: string;
    picture: string;
}

type AuthResponse = {
    type: string;
    params: {
        access_token: string;
    }
}

type AuthContextType = {
    user: User | null;
    signIn: () => Promise<void>;
    signOut: () => void;
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null)

    const signIn = useCallback(async () => {
        try {
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`)
                    .then(async (response) => {
                        const userInfo = await response.json();
                        setUser(userInfo);
                        await storeUser(userInfo);
                    })
                    .catch(err => {
                        console.log(err);
                        setUser({} as User);
                    });
            }
        } catch (e: any) {
            throw new Error(e);
        }

    }, []);

    const removeUser = async () => {
        try {
            await AsyncStorage.removeItem('@meugado_off:user');
            await AsyncStorage.removeItem('@meugado_off:farms');
        } catch (e) {
            console.log(e);
        }
        console.log('Done.')
    }

    const signOut = async () => {
        await removeUser();
        alert('Usuário deslogado com sucesso.')
        setUser(null);
    }

    const storeUser = async (value: User) => {
        try {
            const userInfo = JSON.stringify(value);
            await AsyncStorage.setItem('@meugado_off:user', userInfo);
        } catch (e) {
            console.log(e);
        }
    }


    const getUserInfo = async () => {
        try {
            const value = await AsyncStorage.getItem('@meugado_off:user');
            if (value !== null) {
                setUser(JSON.parse(value) as User);
            }
            else {
                console.log('Usuario não existe, permanece na página.')
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if(!user){
            getUserInfo();
        }
    }, [user])

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}
