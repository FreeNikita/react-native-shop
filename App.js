import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { store } from "./src/store";
import ShopNavigator from './src/navigation/ShopNavigator'

const fetchFonts = () => Font.loadAsync(({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
}))

export default function App() {
  const [isLoadFinish, setIsLoadFinish] = useState(false)

  if(!isLoadFinish){
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setIsLoadFinish(true)}
      onError={console.log}
    />
  }

  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  );
}
