import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SaveHeaderButton } from "../../components/HeaderButtons";
import { ROUTER_PATH } from "../../navigation/path";
import { OWNER_ID } from "../../constants/MOCK";
import { createProduct, updateProducts } from '../../API/products'

export const EditProductScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const prodId = navigation.getParam('productId');
  const editedProduct = useSelector(state =>
    state.products.userProducts.find(prod => prod.id === prodId)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ''
  );
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ''
  );

  const submitHandler = useCallback(() => {

    if (prodId) {
      dispatch(updateProducts({
          id: prodId,
          title,
          imageUrl,
          description
        }
      ))
    } else {
      dispatch(createProduct({
        price: +price,
        title,
        imageUrl,
        description,
        ownerId: OWNER_ID,
      }))
    }
    navigation.navigate(ROUTER_PATH.userProduct)
  }, [title, imageUrl, description, price, prodId]);

  useEffect(() => {
    navigation.setParams({submit: submitHandler});
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={text => setPrice(text)}
              keyboardType='decimal-pad'
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: navigation.getParam('productId')
      ? 'Edit Product'
      : 'Add Product',
    headerRight: () => <SaveHeaderButton navigation={navigation}/>,
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});
