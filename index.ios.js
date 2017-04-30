import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import PhotoList from './src/components/PhotoList';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Photos'} />
    <PhotoList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('photos', () => App);
