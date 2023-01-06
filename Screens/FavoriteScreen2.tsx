import React from "react";
import { Button, Text, View } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Done"
        onPress={() => navigation.navigate("Landing", { name: "Jane" })}
      />
    </View>
  );
};

export default HomeScreen;
