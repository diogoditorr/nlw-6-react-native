import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { theme } from "../global/styles/theme";
import AppointmentCreate from "../screens/AppointmentCreate";
import AppointmentDetails from "../screens/AppointmentDetails";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: theme.colors.secondary100,
                },
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Stack.Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Stack.Navigator>
    );
}
