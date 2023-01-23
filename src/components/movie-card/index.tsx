import React from 'react';
import {View, Image} from 'react-native';

import styles from './style';

interface MovieCardProps {
  type: 'preview' | 'movie';
  imgName: string;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  const {type, imgName} = props;
  const imgLink = 'https://image.tmdb.org/t/p/w500' + imgName;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: imgLink}}
        style={
          type === 'preview'
            ? {
                width: 100,
                height: 100,
                borderRadius: 140 / 2,
                resizeMode: 'contain',
              }
            : {width: 140, height: 180}
        }
      />
    </View>
  );
}

export default MovieCard;
