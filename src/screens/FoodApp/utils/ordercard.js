import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import * as colors from "../../../components/common/colors";

export const HomeCard = ({ icon, onPress, isActive, title }) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.click, isActive && styles.container]}
        onPress={onPress}
      >
        {icon}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.Black,
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
  },
  container: {
    backgroundColor: colors.Navyblue,
    height: 85,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  click: {
    height: 85,
    width: 75,
    backgroundColor: colors.Wheatgray,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
