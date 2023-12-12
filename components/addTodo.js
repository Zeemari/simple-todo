import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function TodoItem({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder="create todo...."
        onChangeText={changeHandler}
      />
      <Button
        title="add todo"
        color="coral"
        onPress={() => submitHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
  },
});
