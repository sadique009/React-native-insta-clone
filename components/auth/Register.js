import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
// import firebase from "firebase/compat/app";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUp = ({ email, password, name }) => {
    createUserWithEmailAndPassword(auth, email, password)
      // after data is fetched from the firebase, then gets triggered.
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={(name) => setName(name)}
      ></TextInput>

      <TextInput
        placeholder="email"
        onChangeText={(email) => setEmail(email)}
      ></TextInput>

      <TextInput
        placeholder="password"
        secureTextEntry
        onChangeText={(pwd) => setPassword(pwd)}
      ></TextInput>
      <Button title="signup" onPress={() => onSignUp()} />
    </View>
  );
};

export default Register;
