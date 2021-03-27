import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from "@expo/vector-icons";

import { ProductsScreen } from "../screens/shop/ProductsScreen";
import { ProductDetailScreen } from "../screens/shop/ProductDetailScreen";
import { CartScreen } from "../screens/shop/CartScreen";
import { OrdersScreen } from "../screens/shop/OrdersScreen";
import Colors from '../constants/Colors'
import { ROUTER_PATH } from './path'
import { isPlatform } from "../utils/platform";


const isAndroid = isPlatform("android");

const defaultOptions = {
  headerStyle: {
    backgroundColor: isAndroid ? Colors.primary : "white"
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: isAndroid ? "white" : Colors.primary
}

const ProductsNavigator = createStackNavigator(
  {
    [ROUTER_PATH.products]: ProductsScreen,
    [ROUTER_PATH.productsDetail]: ProductDetailScreen,
    [ROUTER_PATH.cart]: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={isAndroid ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultOptions
  }
)

const OrdersNavigator = createStackNavigator({
    [ROUTER_PATH.order]: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={isAndroid ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultOptions
  })

const ShopNavigator = createDrawerNavigator({
  Product: ProductsNavigator,
  Orders: OrdersNavigator,
}, {
  contentOptions: {
    activeTintColor: Colors.primary,
    itemsContainerStyle: {
      marginVertical: 20
    }
  }
})

export default createAppContainer(ShopNavigator)