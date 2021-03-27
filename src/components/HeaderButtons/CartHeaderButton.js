import React from 'react';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ROUTER_PATH } from '../../navigation/path';
import { isPlatform } from "../../utils/platform";

export const CartHeaderButton = ({navigate}) => {
  const isAndroid = isPlatform("android");

  const Button = (params) => (
    <HeaderButton
      {...params}
      IconComponent={Ionicons}
      iconSize={23}
      color={isAndroid ? 'white' : Colors.primary}
    />
  )

  return (
    <HeaderButtons HeaderButtonComponent={Button}>
      <Item
        title='Cart'
        iconName={isAndroid ? 'ios-cart' : 'md-cart'}
        onPress={() => navigate(ROUTER_PATH.cart )}
      />
    </HeaderButtons>
  );
};
