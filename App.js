import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ marginTop: 60 }}>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
}
