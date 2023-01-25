import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {useAppDispatch} from '../../../store/hooks';
import {addToList} from '../../../store/reducers/usersReducer';

import {fetchGenre} from '../../../services/actions/fetchGenre';

import styles from './style';

interface DetailsProps {
  title: string;
  genres: number[];
  desc: string;
  imgLink: string,
  id: number;
  vote: number;
}

const Details = (props: DetailsProps) => {
  const {title, genres, desc, imgLink, id, vote} = props;

  const [genre, setGenre] = useState();

  const dispatch = useAppDispatch();

  const addMovie = () => {
    dispatch(addToList({title, genre, desc, imgLink, id, vote}));
    Alert.alert('Eklendi..');
  };

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
        <TouchableOpacity onPress={() => addMovie()}>
          <Icon name="plus" color="red" size={25} />
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
