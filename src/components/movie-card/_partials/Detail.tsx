// Import React
import { useState, useEffect, useContext, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Import Navigation Context
import { NavigationContext } from '@react-navigation/native';

// Import Icons
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// Import Utils
import { addMovie } from '../../../common/utils/addMovie';
import { openMovieDetailPage } from '../../../common/utils/openMovieDetailPage';
import { fetchGenre } from '../../../common/utils/fetchGenre';

// Import Components
import InfoModal from '../../info-modal/InfoModal';

// styles
import styles from '../../../assets/styles/Details.style';

interface DetailsProps {
  type: 'preview' | 'movie';
  title: string;
  genres: number[];
  desc: string;
  imgLink: string;
  id: number;
  vote: number;
  movieList: [];
  userID?: string;
}

const Details = (props: DetailsProps) => {
  // destruct props
  const { type, title, genres, desc, imgLink, id, vote, movieList, userID } = props;

  // variables
  const navigation = useContext(NavigationContext);

  // useState
  const [genre, setGenre] = useState();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // useEffect
  useEffect(() => {
    // method for getting the genre name according to genre id
    const getGenre = async () => {
      setGenre(await fetchGenre(genres[0]));
    };

    getGenre();
  }, []);

  return (
    <View style={type === 'movie' ? styles.detailsContainer : [styles.detailsContainer, styles.playButtonContainer]}>
      {type === 'movie' ? (
        <>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.title} numberOfLines={2}>
                {title}
              </Text>
              <Text style={styles.genre}>{genre?.name}</Text>
            </View>
            <View style={styles.headerButtons}>
              <TouchableOpacity
                onPress={() => {
                  addMovie(title, desc, imgLink, id, vote, movieList, genre);
                }}
              >
                <Icon name="plus" color="red" size={25} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  openMovieDetailPage(navigation, { title, genre, desc, imgLink, vote, id, userID });
                }}
              >
                <MaterialIcon name="open-in-full" color="green" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.detail} numberOfLines={6}>
            {desc}
          </Text>
        </>
      ) : (
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <MaterialIcon name="play-circle-outline" color="#fff" size={37} />
          <InfoModal
            type="video"
            isVisible={modalVisible}
            setIsVisible={setModalVisible}
            title={title}
            imgLink={imgLink}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Details;
