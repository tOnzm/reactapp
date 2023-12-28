import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import Header from "./components/Header";
import Home from "./screen/Home";
import News from "./screen/News";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{title: 'News'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  
});
