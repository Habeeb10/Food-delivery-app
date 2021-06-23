import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../screens/FoodApp/Homepage";
import Save from "../screens/FoodApp/Save";
import * as colors from "../components/common/colors";
import Profile from "../screens/FoodApp/profile";
import Notification from "../screens/FoodApp/Notification";
import { AlarmIcon, HomeIcon, ProfileIcon, SaveIcon } from "../../assets/svg";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode={false}>
      <HomeStack.Screen name="homepage" component={Homepage} />
    </HomeStack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "home") {
              return (
                <HomeIcon
                  color={focused ? colors.Navyblue : colors.Lightgray}
                />
              );
            } else if (route.name === "profile") {
              return (
                <ProfileIcon
                  color={focused ? colors.Navyblue : colors.Lightgray}
                />
              );
            } else if (route.name === "save") {
              return (
                <SaveIcon
                  color={focused ? colors.Navyblue : colors.Lightgray}
                />
              );
            } else if (route.name === "notification") {
              return (
                <AlarmIcon
                  color={focused ? colors.Navyblue : colors.Lightgray}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.Navyblue,
          inactiveTintColor: colors.Lightgray,
        }}
      >
        <Tab.Screen name="home" component={HomeStackScreen} />
        <Tab.Screen name="profile" component={Profile} />
        <Tab.Screen name="save" component={Save} />

        <Tab.Screen name="notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
