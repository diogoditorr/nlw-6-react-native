import React, { createContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import {
    CDN_IMAGE,
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
    SCOPE,
} from "../configs/discordAuth";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_USERS } from "../configs/database";

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
};

type AuthContextData = {
    loading: boolean;
    user: User;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    };
};

type AuthContextProviderProps = {
    children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn() {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const response = (await AuthSession.startAsync({
                authUrl,
            })) as AuthorizationResponse;

            if (response.type === "success" && !response.params.error) {
                api.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.params.access_token}`;

                const userInfo = await api.get("/users/@me");
                const firstName = userInfo.data.username.split(" ")[0];
                const avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                const userData = {
                    ...userInfo.data,
                    firstName,
                    avatar,
                    token: response.params.access_token,
                };

                await AsyncStorage.setItem(
                    COLLECTION_USERS,
                    JSON.stringify(userData)
                );
                setUser(userData);
            }
        } catch (error) {
            throw new Error("Não foi possível autenticar");
        } finally {
            setLoading(false);
        }
    }

    async function signOut() {
        setUser({} as User);
        await AsyncStorage.removeItem(COLLECTION_USERS);
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem(COLLECTION_USERS);

        if (storage) {
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${userLogged.token}`;
            setUser(userLogged);
        }
    }

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                loading,
                user,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
