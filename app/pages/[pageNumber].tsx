import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import { router, useLocalSearchParams } from "expo-router";

const GoBackButton = () => {
  return (
    <Pressable style={styles.button} onPress={() => router.back()}>
      <Text style={styles.buttonText}>Go Back</Text>
    </Pressable>
  );
};

const Pages = () => {
  const local = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <GoBackButton />
      <Text style={styles.content}>{local.pageNumber}</Text>
      <Text>{local?.name}</Text>
      <Text>Age : {local?.age}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 18,
    textAlign: "center",
  },
});

//make this component available to the app
export default Pages;
