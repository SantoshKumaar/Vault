import { View, Text } from 'react-native'
import React from 'react'
//import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native' 

const Stack = createStackNavigator()

const screenOptions = {
    headerShown:false,
}

const SignedInStack = () => (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={screenOptions}
            >
                <Stack.Screen name = 'HomeScreen' component={HomeScreen}/>
                <Stack.Screen name ='LoginScreen' component={LoginScreen}/>
                <Stack.Screen name ='SignupScreen' component={SignupScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
)
export default SignedInStack