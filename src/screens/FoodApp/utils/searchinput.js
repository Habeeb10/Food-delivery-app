import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import * as colors from "../../../components/common/colors";
import SearchIcon from "../../../../assets/svg";

export const SearchInput = ({ placeholder, icon }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="black"
      />
      <View>{(icon = <SearchIcon />)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.Wheatgray,
    alignSelf: "center",
    paddingHorizontal: 20,
    width: 355,
    marginTop: 25,
    height: 44,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  textInput: {
    fontSize: 13,
    fontWeight: "300",
  },
});
