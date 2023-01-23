import React from 'react';
import {View, Text, FlatList} from 'react-native';

import MovieCard from '../movie-card';

import styles from './style';

interface MovieSectionProps {
  title: string;
  data: [];
  type: 'preview' | 'movie';
}

function MovieSection(props: MovieSectionProps): JSX.Element {
  const {title, data, type} = props;

  return (
    <View>
      <Text style={styles.titles}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <MovieCard type={type} imgName={item.poster_path} />
        )}
        horizontal={true}
      />
    </View>
  );
}

export default MovieSection;