import React from "react";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import { useState } from "react";

const [pass, setpass];
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          margin: 10,
          padding: 10,
          borderColor: "grey",
          borderWidth: 1,
        }}
        placeholder="Enter email"
        placeholderTextColor="black"
      />
      <TextInput
        style={{
          height: 40,
          margin: 10,
          padding: 10,
          borderColor: "grey",
          borderWidth: 1,
        }}
        placeholder="Enter password"
        placeholderTextColor="black"
      />

      <Button
        title="Login"
        onPress={() => navigation.navigate("Landing", { name: "Jane" })}
      />

      <Button
        title="Sign up"
        onPress={() => navigation.navigate("FavoriteScreen1", { name: "Jane" })}
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
