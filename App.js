import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Landing from "./components/auth/Landing";
import firebase from "firebase/compat/app";
import Register from "./components/auth/Register";

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSCW3mf6SyCLET7cZixP-V8OFnDYfqwEg",
  authDomain: "insta-clone-823a3.firebaseapp.com",
  projectId: "insta-clone-823a3",
  storageBucket: "insta-clone-823a3.appspot.com",
  messagingSenderId: "690818879787",
  appId: "1:690818879787:web:e967e1e052ff061c2ab56e",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  // this check ensures that we are not running any other firebse instance in our app..
  // otherwise, our app will crash.
  firebase.initializeApp(firebaseConfig);
}
// const app = initializeApp(firebaseConfig);

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// authstate Listener.

export default function App() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setIsLoggedIn(false);
        setLoading(true);
      } else {
        setIsLoggedIn(true);
        setLoading(true);
      }
    });
  });

  // if (!loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center" }}>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Loading...</Text>
    </View>
  );
}
