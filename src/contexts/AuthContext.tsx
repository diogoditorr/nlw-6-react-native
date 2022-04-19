import React, { createContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import { CDN_IMAGE, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from '../configs';
import { api } from '../services/api';

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type AuthContextData = {
    loading: boolean;
    user: User;
    signIn: () => Promise<void>;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token: string;
    }
}

type AuthContextProviderProps = {
    children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn() {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            console.log(authUrl);

            const { type, params } = await AuthSession.startAsync({
                authUrl
            }) as AuthorizationResponse;
            
            if (type === "success") {
                api.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`;
                const userInfo = await api.get('/users/@me');
                
                console.log(userInfo)
                const firstName = userInfo.data.username.split(' ')[0];
                const avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;
                
                // sleep for 2 seconds
                await new Promise(resolve => setTimeout(resolve, 2000));

                setUser({
                    ...userInfo.data,
                    firstName,
                    avatar,
                    token: params.access_token
                })

                setLoading(false);
            } else {
                setLoading(false);
            }

        } catch (error) {
            throw new Error('Não foi possível autenticar')
        }
    }

    return (
        <AuthContext.Provider value={{
            loading,
            user,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}