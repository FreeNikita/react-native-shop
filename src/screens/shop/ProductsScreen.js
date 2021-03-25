import React from 'react';
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import { ProductItem } from "../../components/productItem";

export const ProductsScreen = () => {
    const products = useSelector(state => state.products)
    const { availableProducts } = products


    return (
        <FlatList
            data={availableProducts}
            keyExtractor={item => item.id}
            renderItem={ProductItem}
        />
    )
}

ProductsScreen.navigationOptions = {
    headerTitle: "All Products"
}