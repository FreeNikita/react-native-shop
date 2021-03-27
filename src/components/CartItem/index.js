import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Color from "../../constants/Colors";
import { isPlatform } from "../../utils/platform";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../../store/types";

const CartItem = ({item}) => {
  const {quantity, title, sum, id} = item;
  const isAndroid = isPlatform("android");
  const dispatch = useDispatch()
  const removeItem = () => dispatch({type: REMOVE_FROM_CART, payload: {id}})

  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{quantity} x </Text>
        <Text style={styles.mainText}>{title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${sum.toFixed(2)}</Text>
        <TouchableOpacity
          onPress={removeItem}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    shadowColor: 'black',
    shadowOpacity: 0.20,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: 'white'
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
