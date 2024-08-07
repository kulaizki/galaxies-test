import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const PlatformStyle = () => {
  return (
    <View>
      <Text style={styles.label}>I have platform styles!</Text>
      <View style={styles.platformBackground}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    ...Platform.select({
      ios: {
        color: "blue",
      },
      android: {
        color: "green",
      },
    }),
  },
  platformBackground: {
    ...Platform.select({
      ios: {
        backgroundColor: "lightblue",
      },
      android: {
        backgroundColor: "lightgreen",
      },
    }),
    height: 100,
    width: 100,
  },
});

export default PlatformStyle;
