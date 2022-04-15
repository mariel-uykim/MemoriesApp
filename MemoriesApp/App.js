import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import RegisterScreen from './app/Screens/RegisterScreen';
import LoginScreen from './app/Screens/LoginScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './app/Screens/HomeScreen';
import * as Font from 'expo-font';


const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}
export default function App() {

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName="Home"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

