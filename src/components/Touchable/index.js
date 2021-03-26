import React, { memo } from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from "react-native";

export const Touchable = memo(({children, ...props}) => {
  let Touchable = TouchableOpacity
  const {OS, Version} = Platform

  if (OS === 'android' && Version >= 21) {
    Touchable = TouchableNativeFeedback
  }

  return <Touchable {...props}>{children}</Touchable>
})