import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ListItemSeporator() {
  return <View style={styles.seprator} />;
}

const styles = StyleSheet.create({
  seprator: { width: "100%", height: 2, backgroundColor: colors.light },
});

export default ListItemSeporator;
