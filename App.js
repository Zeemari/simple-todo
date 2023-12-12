import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Go for shopping", key: "2" },
    { text: "Create market list", key: "3" },
    { text: "Learn mobile development", key: "4" },
  ]);

  // PressHandler function
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  // To handle the Add Todo submit button function
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
      Alert.alert("Todo added successfully!");
    } else {
      Alert.alert("Char is too short!", "try something else");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("Dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.contentType}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentType: {
    padding: 60,
  },

  list: {
    marginTop: 20,
  },
});
