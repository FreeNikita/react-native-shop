import React from 'react';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { isPlatform } from "../../utils/platform";

export const MenuHeaderButton = ({navigation}) => {
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
        iconName={isAndroid ? 'md-menu' : 'ios-menu'}
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  );
};
//<HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Menu"
//           iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
//           onPress={() => {
//             navigation.toggleDrawer();
//           }}
//         />
//       </HeaderButtons>