import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function History() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#44b617" />
      <Text>History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
