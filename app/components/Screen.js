import React from "react";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style, ...props }) {
  return (
    <SafeAreaView
      style={[{ paddingTop: Constants.statusBarHeight }, style]}
      props
    >
      children
    </SafeAreaView>
  );
}

export default Screen;
