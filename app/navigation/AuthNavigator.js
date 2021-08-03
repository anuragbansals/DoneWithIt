import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack  = createStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name = "Welcome" component={WelcomeScreen}/>
        <Stack.Screen name = "Login" component={WelcomeScreen}/>
        <Stack.Screen name = "Register" component={RegisterScreen}/>
    </Stack.Navigator>
)

export default AuthNavigator;