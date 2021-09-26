import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
const { width, height } = Dimensions.get("screen");

import Header from "../components/DashBoard/Header";

import { dummyData, COLORS } from "../constants";

const Dashboard = ({ navigation }) => {
  const [countries, setCountries] = useState([
    {
      id: -1,
    },
    ...dummyData.countries,
    { id: -2 },
  ]);
  return (
    <>
      <StatusBar />
      <View style={styles.continer}>
        <Header />
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            scrollEventThrottle={16}
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
            data={countries}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item, index }) => {
              return (
                <View key={index}>
                  <Image
                    source={item.image}
                    style={{
                      resizeMode: "cover",
                      margin: 10,
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.blue,
    justifyContent: "center",
  },
});
