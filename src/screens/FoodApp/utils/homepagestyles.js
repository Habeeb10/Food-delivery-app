import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as colors from "../../../components/common/colors";

export const HomepageStyles = StyleSheet.create({
  total: {
    fontWeight: "700",
    fontSize: 22,
    color: colors.Black,
  },
  place: {
    color: colors.Black,
    fontSize: 12,
    fontWeight: "700",
    marginRight: 10,
  },
  totalbox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  placebox: {
    width: 143,
    height: 45,
    backgroundColor: colors.Navyblue,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  fee: {
    color: colors.Black,
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 20,
  },
  price3: {
    color: colors.Black,
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 107,
    marginTop: 20,
  },
  ridebox: {
    backgroundColor: colors.Darkyellow,
    width: 80,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  price2: {
    color: colors.Black,
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 30,
  },
  miles: {
    fontWeight: "500",
    fontSize: 12,
    color: colors.Black,
  },
  milesbox: {
    width: 64,
    height: 34,
    backgroundColor: colors.Darkgray,
    marginTop: 79,
    borderRadius: 10,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  delete: {
    marginLeft: 30,
  },
  vegan: {
    color: colors.Black,
    fontSize: 14,
    fontWeight: "700",
    width: 150,
    marginLeft: 10,
    marginBottom: 10,
  },
  cheese: {
    width: 30,
    height: 52,
    borderRadius: 5,
  },
  cheesebox: {
    flexDirection: "row",
    // paddingHorizontal: 25,
    marginTop: 20,
  },
  cafe: {
    color: colors.Black,
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 10,
  },
  price: {
    color: colors.Black,
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 50,
  },
  cashew: {
    color: colors.Black,
    fontSize: 14,
    fontWeight: "700",
    width: 135,
    marginLeft: 10,
    marginBottom: 10,
  },
  chicken: {
    width: 70,
    height: 62,
  },
  avocadobox: {
    flexDirection: "row",
    marginTop: 29,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  edit: {
    color: colors.Black,
    fontWeight: "500",
    fontSize: 12,
    marginLeft: 100,
    marginTop: 30,
    marginBottom: 25,
  },
  choose: {
    color: colors.Black,
    fontWeight: "500",
    fontSize: 12,
    marginLeft: 100,
  },
  tmebox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  min: {
    color: colors.Black,
    fontWeight: "700",
    fontSize: 14,
    marginLeft: 10,
  },
  ave: {
    marginTop: 30,
    color: colors.Black,
    fontWeight: "700",
    fontSize: 14,
  },
  timebox: {
    backgroundColor: colors.Darkyellow,
    width: 32,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  maplebox: {
    width: 343,
    height: 124,
    backgroundColor: colors.Yellow,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 27,
    borderRadius: 10,
    marginLeft: 25,
    paddingHorizontal: 30,
  },
  order: {
    fontSize: 25,
    fontWeight: "700",
    color: "black",
  },
  orderbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  modalBox: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.White,
    height: 730,
    width: 390,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  foodcontainer: {
    width: 350,
    height: 230,
    backgroundColor: colors.Wheatgray,
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 10,
    // marginBottom: 15,
  },
  image: {
    width: 329,
    height: 135,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  lunch: {
    marginTop: 30,
    marginLeft: 20,
    color: colors.Black,
    fontSize: 16,
  },
  available: {
    color: colors.Darkgray,
    marginLeft: 20,
    marginTop: 5,
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 15,
  },
  two: {
    marginLeft: 10,
    color: colors.White,
    fontWeight: "500",
    fontSize: 16,
  },
  container: {
    flex: 1,
  },
  tastecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    paddingHorizontal: 20,
  },
  taste: {
    color: colors.Black,
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 31,
    width: 195,
  },
  cartcontainer: {
    backgroundColor: colors.Yellow,
    width: 60,
    height: 43,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});