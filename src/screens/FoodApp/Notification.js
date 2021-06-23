import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Notification({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Text style={styles.notification}>notification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notification: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
  },
});
