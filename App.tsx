import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
    Rajdhani_500Medium,
    Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Background from "./src/components/Background";
import { Routes } from "./src/routes";

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
                <Routes />
            </GestureHandlerRootView>
        </Background>
    );
}
