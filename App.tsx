import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
    Rajdhani_500Medium,
    Rajdhani_700Bold
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { LogBox, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Background from "./src/components/Background";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { Routes } from "./src/routes";

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.'])

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_500Medium,
        Rajdhani_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <GestureHandlerRootView style={{ flex: 1 }}>
                <AuthContextProvider>
                    <Routes />
                </AuthContextProvider>
            </GestureHandlerRootView>
        </Background>
    );
}
