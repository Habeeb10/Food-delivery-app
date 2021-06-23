import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Save({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Text style={styles.save}>save</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  save: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
  },
});
