import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from "react-native";

import { ProductsScreen }  from "../screens/shop/ProductsScreen";
import Colors from '../constants/Colors'

const ProductsNavigator = createStackNavigator(
    {
        ProductsScreen,
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