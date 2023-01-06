import React from "react";
import { Button, Text, View } from "react-native";
const Signup = ({ navigation }) => {
  return (
    <Button
      title="Signup"
      onPress={() => navigation.navigate("FavoriteScreen1", { name: "Jane" })}
    />
  );
};

export default Signup;
