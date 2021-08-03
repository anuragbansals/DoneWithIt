import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import FeedNavigator from "./app/navigation/FeedNavigator";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <NavigationContainer>
      {/* <FeedNavigator /> */}
      <AuthNavigator/>
    </NavigationContainer>
  )
}
