import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export const EmptyData = () => {
  return (
    <View style={styles.container}>
      <Text>No products found. Maybe start adding some!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})