import React from 'react';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { isPlatform } from "../../utils/platform";
import { ROUTER_PATH } from "../../navigation/path";

export const CreateHeaderButton = ({navigation}) => {
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
        title='Add'
        iconName={isAndroid ? 'md-create' : 'ios-create'}
        onPress={() => navigation.navigate(ROUTER_PATH.editProduct)}
      />
    </HeaderButtons>
  );
};
