import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => this.setState({ photos: response.data }));
  }

  renderPhotoList() {
    return this.state.photos.map(photo =>
      <Text key={photo.id}>{photo.id}</Text>);
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderPhotoList()}
      </View>
    );
  }
}

export default PhotoList;
