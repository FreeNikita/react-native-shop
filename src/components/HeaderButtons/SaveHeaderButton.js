import React from 'react';
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { isPlatform } from "../../utils/platform";

export const SaveHeaderButton = ({navigation}) => {
  const submitFn = navigation.getParam('submit');
  const isAndroid = isPlatform("android");

  const Button = (params) => (
    <HeaderButton
      {...params}
      IconComponent={Ionicons}
      iconSize={23}
      color={isAndroid ? 'white' : Colors.primary}
    />
  )

  //<HeaderButtons HeaderButtonComponent={HeaderButton}>
  //         <Item
  //           title="Add"
  //           iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
  //           onPress={() => {
  //             navData.navigation.navigate('EditProduct');
  //           }}
  //         />
  //       </HeaderButtons>

  return (
    <HeaderButtons HeaderButtonComponent={Button}>
      <Item
        title='Save'
        iconName={isAndroid ? 'md-checkmark' : 'ios-checkmark'}
        onPress={submitFn}
      />
    </HeaderButtons>
  );
};
