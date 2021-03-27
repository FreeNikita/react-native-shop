import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductItem } from '../../components/ProductItem';
import { MenuHeaderButton, CreateHeaderButton } from "../../components/HeaderButtons";

export const UserProductsScreen = ({navigation}) => {
  const userProducts = useSelector(state => state.products.userProducts);

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem {...itemData} isOwner navigation={navigation}/>
      )}
    />
  );
};

UserProductsScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Your Products',
    headerLeft: () => <MenuHeaderButton navigation={navigation}/>,
    headerRight: () => <CreateHeaderButton navigation={navigation}/>,
  };
};
