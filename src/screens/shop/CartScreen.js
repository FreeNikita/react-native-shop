import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/CartItem';
import { ADD_ORDER } from "../../store/types";

export const CartScreen = () => {
  const dispatch = useDispatch()
  const totalAmount = useSelector(({cart}) => cart.totalAmount);
  const cartItems = useSelector(({cart: {items}}) => Object.values(items))

  const addOrder = () => dispatch({
    type: ADD_ORDER, payload: {
      items: cartItems,
      amount: totalAmount
    }
  })

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.secondary}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={addOrder}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={(item) => (
          <CartItem deletable {...item}/>
        )}
      />
    </View>
  );
};

CartScreen.navigationOptions = () => {
  return {
    headerTitle: 'Cart',
  };
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  }
});
