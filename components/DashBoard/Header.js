import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import profile_pic from "../../assets/images/profile_pic.jpg";
import { COLORS } from "../../constants";
const Header = () => {
  return (
    <View style={styles.continer}>
      <TouchableOpacity>
        <Feather name="menu" size={35} color="white" />
      </TouchableOpacity>
      <View>
        <Text style={{ color: COLORS.white, fontSize: 20 }}>Europ</Text>
      </View>
      <TouchableOpacity>
        <Image
          source={profile_pic}
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            resizeMode: "cover",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  continer: {
    position: "absolute",
    padding: 15,
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
