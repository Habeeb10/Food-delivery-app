import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { EmojiIcon } from "../../../../assets/svg";
import * as colors from "../../../components/common/colors";

export const LunchCard = ({ icon, title, meal, location, total }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textbox}>
        <Text style={styles.location}>{meal}</Text>
        <View style={styles.dot}></View>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.dot}></View>
        <Text style={styles.location}>$$</Text>
      </View>
      <View style={styles.emojibox}>
        {(icon = <EmojiIcon />)}
        <Text style={styles.totalbox}>{`${total}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalbox: {
    marginLeft: 7,
    fontSize: 12,
    color: colors.Navyblue,
    fontWeight: "700",
  },
  emojibox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textbox: {
    flexDirection: "row",
    marginBottom: 4,
  },
  location: {
    color: colors.Darkgray,
    fontWeight: "500",
    fontSize: 12,
    marginBottom: 5,
  },
  dot: {
    width: 3,
    height: 3,
    backgroundColor: colors.Darkgray,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 6,
  },
  title: {
    color: colors.Black,
    marginTop: 10,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
  },
});
