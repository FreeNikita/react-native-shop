import React, { memo } from 'react';
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import { ProductItem } from "../../components/ProductItem";
import { CartHeaderButton, MenuHeaderButton } from '../../components/HeaderButtons'

export const ProductsScreen = memo(({navigation}) => {
  const products = useSelector(state => state.products)
  const {availableProducts} = products

  return (
    <FlatList
      data={availableProducts}
      keyExtractor={item => item.id}
      renderItem={(item) =>
        <ProductItem
          navigation={navigation}
          {...item}
        />
      }
    />
  )
})

ProductsScreen.navigationOptions = ({navigation}) => ({
  headerTitle: "All Products",
  headerRight: () => <CartHeaderButton {...navigation} />,
  headerLeft: () => <MenuHeaderButton navigation={navigation}/>,
})