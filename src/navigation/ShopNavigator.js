import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import { ProductsScreen } from "../screens/shop/ProductsScreen";
import { ProductDetailScreen } from "../screens/shop/ProductDetailScreen";
import { CartScreen } from "../screens/shop/CartScreen";
import Colors from '../constants/Colors'
import { ROUTER_PATH } from './path'
import { isPlatform } from "../utils/platform";

const isAndroid = isPlatform("android");

const ProductsNavigator = createStackNavigator(
  {
    [ROUTER_PATH.products]: ProductsScreen,
    [ROUTER_PATH.productsDetail]: ProductDetailScreen,
    [ROUTER_PATH.cart]: CartScreen,
  },
  {
    defaultNavigationOptions: {
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
  })

export default createAppContainer(ProductsNavigator)