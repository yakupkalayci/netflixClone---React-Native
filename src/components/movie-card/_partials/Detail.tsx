// Import React
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Import Redux
import { useAppDispatch } from '../../../store/hooks';
import { fetchGenre } from '../../../services/actions/fetchGenre';

// Import i18next
import { t } from 'i18next';

// Import Icons
import Icon from 'react-native-vector-icons/Entypo';

// Import Alert Notification
import { ALERT_TYPE } from 'react-native-alert-notification';

// Import Utils
import { addMovie } from '../../../common/utils/addMovie';
import { showToast } from '../../../common/utils/showToast';

// styles
import styles from '../../../assets/styles/Details.style';

interface DetailsProps {
  title: string;
  genres: number[];
  desc: string;
  imgLink: string;
  id: number;
  vote: number;
}

const Details = (props: DetailsProps) => {
  // destruct props
  const { title, genres, desc, imgLink, id, vote } = props;

  // variables
  const dispatch = useAppDispatch();

  // useState
  const [genre, setGenre] = useState();

  // useEffect
  useEffect(() => {
    // method for getting the genre name according to genre id
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
        <TouchableOpacity
          onPress={() => {
            addMovie(dispatch, title, genre, desc, imgLink, id, vote);
            showToast(ALERT_TYPE.SUCCESS, t('GLOBAL.COMPONENTS.ALERT.TITLES.SUCCESS'), t('GLOBAL.COMPONENTS.ALERT.MESSAGES.MOVIE_ADDED'));
          }}
        >
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
