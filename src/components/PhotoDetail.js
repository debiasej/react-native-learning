import React from 'react';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const PhotoDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.photo.id}</Text>
      </CardSection>

      <CardSection>
        <Text>{props.photo.id}</Text>
      </CardSection>

    </Card>
  );
};

export default PhotoDetail;
