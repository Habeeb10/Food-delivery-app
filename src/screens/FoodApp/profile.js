import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Text style={styles.profile}>profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
  },
});
