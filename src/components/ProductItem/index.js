import React, { Fragment, memo, useCallback } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { Touchable } from '../Touchable';
import Colors from "../../constants/Colors";
import Color from "../../constants/Colors";
import { ROUTER_PATH } from "../../navigation/path";
import { ADD_TO_CART } from "../../store/types";
import { Card } from "../Card";
import { deleteProducts } from "../../API/products";

export const ProductItem = memo(({item: product, navigation, isOwner}) => {
  const {id, title, price, imageUrl} = product
  const dispatch = useDispatch()
  const addToCart = () => dispatch({type: ADD_TO_CART, payload: {product}})

  const openDetail = useCallback(() => navigation.navigate(ROUTER_PATH.productsDetail, {
    productId: id,
    productTitle: title
  }), [navigation])

  const editProductHandler = useCallback(() => navigation.navigate(ROUTER_PATH.editProduct, {
    productId: id
  }), [navigation]);

  const deleteHandler = () => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteProducts({id}));
        }
      }
    ]);
  };

  const Actions = () => isOwner ? (
    <Fragment>
      <Button color={Colors.primary} title="Edit" onPress={editProductHandler}/>
      <Button
        color={Colors.primary}
        title="Delete"
        onPress={deleteHandler}
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

  console.log('price', price)

  return (
    <Card style={styles.product}>
      <Touchable onPress={openDetail} useForeground>
        <View>
          <View style={styles.imageContainer}>
            <Image source={{uri: imageUrl}} style={styles.image}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price && price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>
            <Actions/>
          </View>
        </View>
      </Touchable>
    </Card>
  )
})

const styles = StyleSheet.create({
  product: {
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
    height: '18%',
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
    height: '22%',
    paddingHorizontal: 16,
  }
})