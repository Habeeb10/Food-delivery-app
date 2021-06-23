import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CartIcon,
  DeleteIcon,
  ExistIcon,
  RideIcon,
  SelectIcon,
  TimeIcon,
} from "../../../assets/svg";
import { HomeComponent } from "./utils/Homecomponent";
import { HomepageStyles as styles } from "./utils/homepagestyles";
import { LunchComponent } from "./utils/Lunchcomponent";
import { SearchInput } from "./utils/searchinput";
import { useState } from "react";
import * as images from "../../../assets/images";

export default function Homepage() {
  const [modalState, setModalState] = useState(false);
  return (
    <ScrollView stytle={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.tastecontainer}>
        <Text style={styles.taste}>What do you have a taste for?</Text>
        <TouchableOpacity style={styles.cartcontainer}>
          <CartIcon />
          <Text style={styles.two}>2</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.available}>1240 Restaraunts available</Text>
      <SearchInput placeholder="Search for a restaraunt" />
      <HomeComponent />
      <Text style={styles.lunch}>Lunch Restaraunts Near You</Text>
      <TouchableOpacity style={styles.foodcontainer}>
        <ImageBackground style={styles.image} source={images.Bagles}>
          <View style={styles.milesbox}>
            <Text style={styles.miles}>10 miles</Text>
          </View>
        </ImageBackground>
        <LunchComponent />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.foodcontainer}
        onPress={() => setModalState(true)}
      >
        <ImageBackground style={styles.image} source={images.Saigon}>
          <View style={styles.milesbox}>
            <Text style={styles.miles}>15 miles</Text>
          </View>
        </ImageBackground>
        <LunchComponent />
      </TouchableOpacity>

      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={styles.orderbox}>
              <Text style={styles.order}>Your Order</Text>
              <TouchableOpacity onPress={() => setModalState(false)}>
                <ExistIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.maplebox}>
              <View>
                <Text style={styles.ave}>624 Maple Ave</Text>
                <View style={styles.tmebox}>
                  <View style={styles.timebox}>
                    <TimeIcon />
                  </View>
                  <Text style={styles.min}>30 mins</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.edit}>Edit Address</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.choose}>Choose time</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.avocadobox}>
              <Image style={styles.chicken} source={images.Chicken} />
              <View>
                <Text style={styles.cashew}>
                  Chicken, Cashew, and Avocado Salad
                </Text>
                <Text style={styles.cafe}>The Plant Cafe</Text>
              </View>

              <Text style={styles.price}> $15.00 x1</Text>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                style={styles.cheesebox}
              >
                <Image style={styles.cheese} source={images.Cheese} />
                <View>
                  <Text style={styles.vegan}>Vegan Mac & Cheese</Text>
                  <Text style={styles.cafe}>The Plant Cafe</Text>
                </View>

                <Text style={styles.price2}>$14.00 x2</Text>
                <TouchableOpacity>
                  <DeleteIcon style={styles.delete} />
                </TouchableOpacity>
              </ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={styles.ridebox}>
                  <RideIcon />
                </View>
                <Text style={styles.fee}>Delivery Fee</Text>
                <Text style={styles.price3}>$2.50</Text>
              </View>
              <View style={styles.totalbox}>
                <Text style={styles.total}>Total: $17.50</Text>
                <TouchableOpacity style={styles.placebox}>
                  <Text style={styles.place}>Place Order</Text>
                  <SelectIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

// const styles = StyleSheet.create({});
