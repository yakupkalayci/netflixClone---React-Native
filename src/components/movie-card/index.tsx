import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import Details from './_partials/Detail';

import styles from './style';

interface MovieCardProps {
  type: 'preview' | 'movie';
  imgName: string;
  title: string;
  genres: number[];
  desc: string;
  id: number;
  vote: number;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  const {type, imgName, title, genres, desc, id, vote} = props;
  const imgLink = 'https://image.tmdb.org/t/p/w500' + imgName;

  const [showContent, setShowContent] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowContent(!showContent)}>
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
      {showContent && type === 'movie' ? (
        <Details
          title={title}
          genres={genres}
          desc={desc}
          imgLink={imgLink}
          id={id}
          vote={vote}
        />
      ) : null}
    </TouchableOpacity>
  );
}

export default MovieCard;
