import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Todo from "../components/Calander/Todo";

const Place = () => {
  const [text, setText] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  function sentText() {
    setTaskItems([...taskItems, text]);
    setText(null);
    console.log([text]);
  }
  return (
    <>
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Todo Lists</Text>
        <View>
          {taskItems.map((item, index) => {
            return (
              <View key={index}>
                <Todo text={item} />
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.input}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.TextInput}
            placeholder={"write something"}
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={() => sentText()}>
          <View style={styles.button}>
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                fontSize: 30,
              }}
            >
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Place;

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold" },
  input: {
    position: "absolute",
    bottom: 70,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  TextInput: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 20,
    borderColor: "#C0C0C0",
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
