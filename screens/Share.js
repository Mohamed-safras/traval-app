import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
const Share = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LottieView
        source={require("../assets/lottie/mercuri-share.json")}
        autoPlay
      />
    </View>
  );
};

export default Share;

const styles = StyleSheet.create({});
