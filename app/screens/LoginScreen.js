import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppTextInput
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoComplete="current-password"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
8;
