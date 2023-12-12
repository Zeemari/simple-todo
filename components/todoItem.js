import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemStyle}>{item.text}</Text>
        <MaterialIcons name="delete" size={20} color="#333" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    borderStyle: "dashed",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
