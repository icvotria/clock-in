import React, { useState } from "react";
import {
  View,
  Text, 
  StyleSheet
} from "react-native";

const InTime = props => {
  return ( 
  <View style={styles.listItem}>
    <Text>hiya</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#eee",
    borderColor: "black",
    borderWidth: 1,
    width: "60%"
  },
  screen: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    width: "100%"
  },
  button: {
    display: "flex",
    height: 40,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonGreen: {
    display: "flex",
    height: 40,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 14,
    color: "white"
  }
});

export default InTime;
