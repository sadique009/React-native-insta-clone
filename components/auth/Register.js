import React, {useState} from "react";
import { View, Button, TextInput } from "react-native";
import firebase from "firebase/compat/app";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUp = ({ email, password, name }) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      // after data is fetched from the firebase, then gets triggered.
      .then((result) => {
        console.log(result);
      })
      .catch((error)=>{
        console.log(error);
      })
  };

  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={(name) => setName(name)}
      ></TextInput>

      <TextInput
        placeholder="email"
        onChangeText={(email) => setName(email)}
      ></TextInput>

      <TextInput
        placeholder="password"
        secureTextEntry
        onChangeText={(pwd) => setName(pwd)}
      ></TextInput>
      <Button title="signup" onPress={() => onSignUp()} />
    </View>
  );
};

export default Register;
