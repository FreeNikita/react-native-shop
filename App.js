import React from 'react';
import { Provider } from 'react-redux';

import { store } from "./src/store";
import ShopNavigator from './src/navigation/ShopNavigator'

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  );
}
