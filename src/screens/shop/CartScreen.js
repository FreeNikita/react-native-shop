import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/CartItem';
import { Card } from '../../components/Card';
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
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>
            ${Math.round(totalAmount.toFixed(2) * 100 / 100)}
          </Text>
        </Text>
        <Button
          color={Colors.secondary}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={addOrder}
        />
      </Card>
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
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  }
});
