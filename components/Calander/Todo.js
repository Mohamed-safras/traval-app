import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Todo = ({ text }) => {
  return (
    <ScrollView>
      <View style={styles.continer}>
        <View style={styles.Todo}>
          <View style={styles.squre} />
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.circle} />
      </View>
    </ScrollView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  continer: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Todo: {
    flexDirection: "row",
    alignItems: "center",
  },
  squre: {
    height: 20,
    width: 20,
    backgroundColor: "#e42313",
    borderRadius: 5,
    opacity: 0.4,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  circle: {
    backgroundColor: "#e42313",
    width: 20,
    height: 20,
    borderRadius: 50,
    opacity: 0.4,
  },
});
