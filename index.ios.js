import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
  <Text>Some Text</Text>
);

// Render it to the device
AppRegistry.registerComponent('photos', () => App);
