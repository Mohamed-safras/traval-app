import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";
import LottieView from "lottie-react-native";
const BookMark = () => {
  return (
    <View style={styles.continer}>
      <LottieView source={require("../assets/lottie/bookmark.json")} autoPlay />
    </View>
  );
};

export default BookMark;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
});
