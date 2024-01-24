import React from "react";
import { SafeAreaView, View } from "react-native";
import Constants from "expo-constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function Screen({ children, style }) {
  return (
    <SafeAreaView
      style={[{ paddingTop: Constants.statusBarHeight, height: "100%" }, style]}
    >
      <GestureHandlerRootView>{children}</GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default Screen;
