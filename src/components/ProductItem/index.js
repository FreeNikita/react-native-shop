import React, { memo, useCallback, Fragment } from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { Touchable } from '../Touchable';
import Colors from "../../constants/Colors";
import { ROUTER_PATH } from "../../navigation/path";
import { ADD_TO_CART, DELETE_PRODUCT } from "../../store/types";
import Color from '../../constants/Colors'

export const ProductItem = memo(({item : product, navigation, isOwner}) => {
  const {id, title, price, imageUrl} = product
  const openDetail = useCallback(() => navigation.navigate(ROUTER_PATH.productsDetail, {
    productId: id,
    productTitle: title
  }), [navigation])
  const dispatch = useDispatch()

  const addToCart = () => dispatch({type: ADD_TO_CART, payload: { product } })

  const Actions = () => isOwner ? (
    <Fragment>
      <Button color={Colors.primary} title="Edit" onPress={() => {}} />
      <Button
        color={Colors.primary}
        title="Delete"
        onPress={() => {
          dispatch({type: DELETE_PRODUCT, payload: {id}});
        }}
      />
    </Fragment>
  ) : (
    <Fragment>
      <Button
        title={'View Details'}
        color={Colors.primary}
        onPress={openDetail}
      />
      <Button
        title={'To Cart'}
        color={Colors.primary}
        onPress={addToCart}
      />
    </Fragment>
  )

  return (
    <View style={styles.product}>
      <Touchable onPress={openDetail} useForeground>
        <View>
          <View style={styles.imageContainer}>
            <Image source={{uri: imageUrl}} style={styles.image}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>
            <Actions />
          </View>
        </View>
      </Touchable>
    </View>
  )
})

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, header: 2},
    shadowRadius: 8,
    elevation: 5,

    borderRadius: 8,
    backgroundColor: 'white',

    height: 300,
    margin: 20,

    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: "60%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: "100%",
  },
  container: {
    alignItems: 'center',
    height: '15%',
  },
  title: {
    fontSize: 18,
    marginVertical: 8,
    fontFamily: 'open-sans-bold'
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: Color.grey,
    fontFamily: 'open-sans'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 16,
  }
})