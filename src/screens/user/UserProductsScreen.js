import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ProductItem } from '../../components/ProductItem';
import { MenuHeaderButton, CreateHeaderButton } from "../../components/HeaderButtons";
import { setOwnProducts } from "../../API/products";

export const UserProductsScreen = ({navigation}) => {
  const dispath = useDispatch()
  const userProducts = useSelector(state => state.products.userProducts);

  useEffect(() => {
    dispath(setOwnProducts())
  }, [])

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
