import React from 'react';
import {View, Image} from 'react-native';
import images from '../images';

import styles from './style';

interface PreviewCardProps {
  type: 'preview' | 'movie';
  imgName: string;
}

function PreviewCard(props: PreviewCardProps): JSX.Element {
  const {type, imgName} = props;

  return (
    <View style={styles.container}>
      <Image
        source={
          type === 'preview' ? images.previews[imgName] : images.movies[imgName]
        }
        style={
          type === 'preview'
            ? {width: 100, height: 100}
            : {width: 140, height: 180}
        }
        resizeMode={type === 'preview' ? 'contain' : 'cover'}
      />
    </View>
  );
}

export default PreviewCard;
