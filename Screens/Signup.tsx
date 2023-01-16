import React from "react";
import { StyleSheet, Button, Text, View, TextInput, Alert } from "react-native";
import { useState, useEffect } from "react";
import { loginHandler } from "../redux/reducers/auth";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signUpHandler } from "../redux/reducers/auth";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  function submit() {
    dispatch(signUpHandler({ email, password }));
  }
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          onChangeText={setName}
          autoCorrect={false}
          autoFocus={true}
          autoCapitalization={false}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter email"
          onChangeText={setEmail}
          autoCorrect={false}
          autoFocus={true}
          autoCapitalization={false}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter password"
          onChangeText={setPassword}
          placeholderTextColor="black"
          secureTextEntry={true}
        />
      </View>

      <Button title="Sign up" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    color: "purple",
  },
  subTitle: {
    fontSize: 16,
  },
  titleContainer: {
    marginTop: 200,
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    width: 350,
    borderColor: "purple",
    margin: 5,
    height: 30,
    padding: 5,
  },
  textInputContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "red",
  },
  errorContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default Signup;
