import React, { memo } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import Colors from '../../constants/Colors'
import { ADD_TO_CART } from "../../store/types";

export const ProductDetailScreen = memo(({navigation}) => {
  const productId = navigation.getParam('productId')
  const {availableProducts = []} = useSelector(state => state.products)
  const product = availableProducts.find(({id}) => id === productId)
  const dispatch = useDispatch();

  const addToCart = () => dispatch({type: ADD_TO_CART, payload: { product } })

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{uri: product.imageUrl}} />
        <View  style={styles.button} >
          <Button
            color={Colors.primary}
            title="Add to Cart"
            onPress={addToCart}
          />
        </View>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  )
})

ProductDetailScreen.navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('productTitle')
})

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  button: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'open-sans'
  }
})
