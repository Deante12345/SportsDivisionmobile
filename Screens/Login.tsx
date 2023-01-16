import React from "react";
import { StyleSheet, Button, Text, View, TextInput, Alert } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../redux/reducers/auth";

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { authData, loading } = useSelector((state: RootState) => state.auth);

  function navigateToMain() {
    navigation.navigate("Landing");
  }

  function submit() {
    dispatch(loginHandler({ email, password }));
  }

  useEffect(() => {
    console.log(authData, loading);
    if (!loading && authData.code) {
      Alert.alert(authData.code);
    }

    if (!loading && authData.email && authData.userId) {
      navigateToMain();
    }
  }, [dispatch, loading]);

  if (loading) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
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

      <Button title="Login" onPress={submit} />

      <Button
        title="Sign up"
        onPress={() => navigation.navigate("SignUp", { name: "Jane" })}
      />
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

export default HomeScreen;
