import React from "react";
import { Button, Text, View } from "react-native";
const FavoriteScreen1 = ({ navigation }) => {
  return (
    <View>
      <Button
        title="next"
        onPress={() => navigation.navigate("FavoriteScreen2", { name: "Jane" })}
      />
    </View>
  );
};

export default FavoriteScreen1;
