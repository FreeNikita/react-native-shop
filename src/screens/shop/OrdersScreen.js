import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { MenuHeaderButton } from '../../components/HeaderButtons'
import { OrderItem } from '../../components/OrderItem';

export const OrdersScreen = () => {
  const orders = useSelector(state => state.order.orders);

  return (
    <FlatList
      data={orders}
      renderItem={(item) => <OrderItem {...item}/>}
    />
  );
};

OrdersScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: () => <MenuHeaderButton navigation={navigation}/>,
  };
};
