import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Colors.primary}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})