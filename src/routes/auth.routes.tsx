import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'transparent',
                }
            }}
        >
            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}