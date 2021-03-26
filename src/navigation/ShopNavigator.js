import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from "react-native";

import { ProductsScreen }  from "../screens/shop/ProductsScreen";
import { ProductDetailScreen }  from "../screens/shop/ProductDetailScreen";
import Colors from '../constants/Colors'
import {ROUTER_PATH} from './path'

const ProductsNavigator = createStackNavigator(
    {
      [ROUTER_PATH.products] :ProductsScreen,
      [ROUTER_PATH.productsDetail]: ProductDetailScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'ios' ? "white" : Colors.primary
            },
            headerTintColor: Platform.OS === 'ios' ? Colors.primary : "white"
        }
})

export default createAppContainer(ProductsNavigator)