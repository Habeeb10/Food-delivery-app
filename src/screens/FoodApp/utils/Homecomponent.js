import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  BreakfastIcon,
  DesertIcon,
  DinnerIcon,
  EmojiIcon,
  LunchIcon,
} from "../../../../assets/svg";
import { HomeCard } from "./homecard";
import { LunchCard } from "./lunchcard";

const HomeList = [
  {
    icon: <DinnerIcon />,
    title: "Dinner",
  },
  {
    icon: <LunchIcon />,
    title: "Lunch",
  },
  {
    icon: <BreakfastIcon />,
    title: "Breakfast",
  },
  {
    icon: <DesertIcon />,
    title: "Desert",
  },
];

export const HomeComponent = () => {
  const [active, setActive] = useState("Lunch");
  return (
    <View>
      <View style={styles.box}>
        {HomeList.map((item, index) => {
          return (
            <HomeCard
              key={index}
              icon={item.icon}
              title={item.title}
              onPress={() => setActive(item.title)}
              isActive={item.title === active}
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
