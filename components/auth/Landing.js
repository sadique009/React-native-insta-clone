import React from "react";
import { Text, View, Button } from "react-native";

export default function Landing({ navigation }) {
  // it receives a prop called navigtion.
  // It gives us access to "NavigationContainer" which is inside "App.js" file.
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      ></Button>

      <Button
        title="Register"
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </View>
  );
}
