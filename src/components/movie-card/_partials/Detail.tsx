import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {fetchGenre} from '../../../services/actions/fetchGenre';

import styles from './style';

interface DetailsProps {
  title: string;
  genres: number[];
  desc: string;
}

const Details = (props: DetailsProps) => {
  const {title, genres, desc} = props;

  const [genre, setGenre] = useState();

  useEffect(() => {
    const getGenre = async () => {
      setGenre(await fetchGenre(genres[0]));
    };
    getGenre();
  }, []);

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <TouchableOpacity>
          <Icon name="plus" color="#000" size={25} />
        </TouchableOpacity>
      </View>
      <Text style={styles.genre}>{genre?.name}</Text>
      <Text style={styles.detail} numberOfLines={6}>
        {desc}
      </Text>
    </View>
  );
};

export default Details;
