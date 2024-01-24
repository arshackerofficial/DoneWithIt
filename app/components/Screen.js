import React from "react";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[{ paddingTop: Constants.statusBarHeight }, style]}>
      {children}
    </SafeAreaView>
  );
}

export default Screen;
