import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Color from "../../constants/Colors";
import { isPlatform } from "../../utils/platform";

const CartItem = ({item}) => {
  const {quantity, title, sum} = item;
  const isAndroid = isPlatform("android");
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{quantity} x </Text>
        <Text style={styles.mainText}>{title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${sum.toFixed(2)}</Text>
        <TouchableOpacity
          onPress={() => console.log('asd')}
          style={styles.deleteButton}
        >
          <Ionicons
            name={isAndroid ? 'md-trash' : 'ios-trash'}
            size={24}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    fontFamily: 'open-sans',
    color: Color.grey,
    fontSize: 16
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  deleteButton: {
    marginLeft: 20
  }
});

export default CartItem;
