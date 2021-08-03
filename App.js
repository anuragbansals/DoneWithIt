import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}
