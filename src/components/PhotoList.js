import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class PhotoList extends Component {
  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(respose => console.log(respose));
  }

  render() {
    return (
      <View>
        <Text>Photo List!!</Text>
      </View>
    );
  }
}

export default PhotoList;
