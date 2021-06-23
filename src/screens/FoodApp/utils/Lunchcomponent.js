import React from "react";
import { View, StyleSheet } from "react-native";
import { EmojiIcon } from "../../../../assets/svg";

import { LunchCard } from "./lunchcard";

const LunchList = [
  {
    title: "Noah’s Bagels",
    location: "American",
    meal: "Lunch",
    icon: <EmojiIcon />,
    total: 97,
  },
];

export const LunchComponent = () => {
  return (
    <View>
      <View style={styles.box}>
        {LunchList.map((item, index) => {
          return (
            <LunchCard
              key={index}
              title={item.title}
              location={item.location}
              meal={item.meal}
              icon={item.icon}
              total={item.total}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
