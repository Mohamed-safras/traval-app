import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

import { Dashboard, Place } from "../screens";
import { COLORS, FONTS, icons } from "../constants";
import LottieView from "lottie-react-native";
import BookMark from "../screens/BookMark";
import Share from "../screens/Share";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.black,
          borderTopColor: "transparent",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? (
                <LottieView
                  source={require("../assets/lottie/maps.json")}
                  autoPlay
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
              ) : (
                <Image
                  source={icons.maps}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.gray,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookMark}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <LottieView
                  source={require("../assets/lottie/bookmark.json")}
                  autoPlay
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
              ) : (
                <Image
                  source={icons.bookmark}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.gray,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Place}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <LottieView
                  source={require("../assets/lottie/calendar.json")}
                  autoPlay
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
              ) : (
                <Image
                  source={icons.calendar}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.gray,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="share"
        component={Share}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <LottieView
                  source={require("../assets/lottie/mercuri-share.json")}
                  autoPlay
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
              ) : (
                <Image
                  source={icons.plane}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.gray,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.blue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
