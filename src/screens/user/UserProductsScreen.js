import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductItem } from '../../components/ProductItem';
import { MenuHeaderButton } from "../../components/HeaderButtons";

export const UserProductsScreen = () => {
  const userProducts = useSelector(state => state.products.userProducts);

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem {...itemData} isOwner/>
      )}
    />
  );
};

UserProductsScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Your Products',
    headerLeft: () => <MenuHeaderButton navigation={navigation}/>,
  };
};
