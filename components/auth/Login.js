import { View, Text } from "react-native";
import React, {useState} from "react";
import firebase from "firebase/compat/app";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onLogin = ({ email, password }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
      {/* <TextInput
        placeholder="name"
        onChangeText={(name) => setName(name)}
      ></TextInput> */}

      <TextInput
        placeholder="email"
        onChangeText={(email) => setName(email)}
      ></TextInput>

      <TextInput
        placeholder="password"
        secureTextEntry
        onChangeText={(pwd) => setName(pwd)}
      ></TextInput>
      <Button title="LogIn" onPress={() => onLogin()} />
    </View>
  );
};

export default Login;
