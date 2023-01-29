// dependencies installed in this app.
// 
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Landing from "./components/auth/Landing";

import Register from "./components/auth/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
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
            // options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Register"
            component={Register}
            // options={{ headerShown: false }}
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
