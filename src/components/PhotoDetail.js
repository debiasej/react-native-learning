import React from 'react';
import { Text } from 'react-native';

import Card from './Card';

const PhotoDetail = (props) => {
  return (
    <Card>
      <Text>{props.photo.id}</Text>
    </Card>
  );
};

export default PhotoDetail;
