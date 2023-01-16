import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Landing from "./Screens/Landing";
import Signup from "./Screens/Signup";
import FavoriteScreen1 from "./Screens/FavoriteScreen1";
import FavoriteScreen2 from "./Screens/FavoriteScreen2";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import { store } from "./redux/store";
//import { config } from "./src/config/firebase";
const Stack = createNativeStackNavigator();

//initializeApp(config.firebaseConfig);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Sports Division" }}
          />
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ title: "Landing" }}
          />
          <Stack.Screen
            name="SignUp"
            component={Signup}
            options={{ title: "Signup" }}
          />
          <Stack.Screen
            name="FavoriteScreen1"
            component={FavoriteScreen1}
            options={{ title: "Personalize your Account" }}
          />
          <Stack.Screen
            name="FavoriteScreen2"
            component={FavoriteScreen2}
            options={{ title: "Personalize your Account pt.2" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
