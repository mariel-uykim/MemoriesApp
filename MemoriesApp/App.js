import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import RegisterScreen from './app/Screens/RegisterScreen';
import LoginScreen from './app/Screens/LoginScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './app/Screens/HomeScreen';
import CollectionScreen from './app/Screens/CollectionScreen';
import GalleryScreen from './app/Screens/GalleryScreen';
import AddImage from './app/Screens/AddImageScreen';

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
        <Stack.Screen name="Collection" component={CollectionScreen}/>
        <Stack.Screen name="Gallery" component={GalleryScreen}/>
        <Stack.Screen name="AddImage" component={AddImage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

