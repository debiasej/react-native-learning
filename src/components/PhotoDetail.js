import React from 'react';
import { View, Text } from 'react-native';

const PhotoDetail = (props) => {
  return (
    <View>
      <Text>{props.photo.id}</Text>
    </View>
  );
};

export default PhotoDetail;
