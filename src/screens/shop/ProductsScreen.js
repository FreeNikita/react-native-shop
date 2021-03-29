import React, { memo, useEffect, useState } from 'react';
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { ProductItem } from "../../components/ProductItem";
import { CartHeaderButton, MenuHeaderButton } from '../../components/HeaderButtons'
import { setProducts } from "../../API/products";
import { Loader } from '../../components/Loader';
import { EmptyData } from "../../components/EmptyData";

export const ProductsScreen = memo(({navigation}) => {
  const [isLoading, setIsLoading] = useState('false')
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const {availableProducts} = products

  useEffect(() => {
    const loadProducts = async() => {
      setIsLoading(true)
      dispatch(setProducts())
      setIsLoading(false)
    }
    loadProducts()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if(!isLoading && availableProducts.length === 0 ) {
    return <EmptyData />
  }

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