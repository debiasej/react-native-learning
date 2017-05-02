import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import PhotoDetail from './PhotoDetail';

const NUM_PHOTOS_SHOW = 10;

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentWillMount() {
    axios.get('https://demo9087061.mockable.io/api/photo_list')
      .then(response => this.setState({ photos: response.data }));
  }

  renderPhotoList() {
    return this.state.photos.slice(0, NUM_PHOTOS_SHOW).map(photo =>
      <PhotoDetail key={photo.title} photo={photo} />);
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
