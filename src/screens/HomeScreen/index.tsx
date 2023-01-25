import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconInfo from 'react-native-vector-icons/Foundation';
import IconClose from 'react-native-vector-icons/Fontisto';

import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {addToList} from '../../store/reducers/usersReducer';

import Header from '../../components/header';
import MovieSection from '../../components/movie-section';

import {fetchMovies} from '../../services/actions/fetchMovies';

import {getRandomImageNumber} from '../../utils/getRandomImageNumber';

import styles from './style';

export type MoviesObjectType = {
  day: [];
  week: [];
  contiuneWatching: [];
};

function HomeScreen({navigation}): JSX.Element {
  const [movies, setMovies] = useState<MoviesObjectType>({
    day: [],
    week: [],
    contiuneWatching: [],
  });
  const [randomImage, setRandomImage] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const activeUser = useAppSelector(state => state.users.usersData.activeUser);

  const addMovie = () => {
    const imgLink =
      'https://image.tmdb.org/t/p/w500' + movies?.day[randomImage]?.poster_path;
    const title = movies.day[randomImage]?.title;
    const genre = movies.day[randomImage]?.genre_ids;
    const desc = movies.day[randomImage]?.overview;
    const id = movies.day[randomImage]?.id;
    const vote = movies.day[randomImage]?.vote_average;

    dispatch(addToList({title, genre, desc, imgLink, id, vote}));
    Alert.alert('Eklendi..');
  };

  useEffect(() => {
    fetchMovies(setMovies);
    getRandomImageNumber(movies, setRandomImage);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://image.tmdb.org/t/p/w500' +
                movies.day[randomImage]?.poster_path,
            }}
            style={styles.mainPoster}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => addMovie()}>
            <Icon name="plus" size={30} color="#fff" />
            <Text style={styles.actionText}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonPlay]}>
            <Icon name="controller-play" size={30} color="#000" />
            <Text style={[styles.actionText, styles.actionButtonPlayText]}>
              Play
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                  <Text style={[styles.modalText, styles.modalTitle]}>
                    Title: {movies.day[randomImage]?.title}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.closeBtn}>
                    <IconClose name="close" color="red" size={20} />
                  </TouchableOpacity>
                </View>
                <Text style={[styles.modalText, styles.originalTitle]}>
                  Original Title: {movies.day[randomImage]?.original_title}
                </Text>
                <Text style={[styles.modalText, styles.detail]}>
                  Description: {movies.day[randomImage]?.overview}
                </Text>
              </View>
            </Modal>
            <IconInfo name="info" size={30} color="#fff" />
            <Text style={styles.actionText}>Info</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
          <MovieSection title="Previews" data={movies?.week} type="preview" />
          <MovieSection
            title={`Contiune watching for ${activeUser?.username}`}
            data={movies?.contiuneWatching}
            type="movie"
          />
          <MovieSection title="Bugün Popüler" data={movies?.day} type="movie" />
          <MovieSection
            title="Bu Hafta Popüler"
            data={movies?.week}
            type="movie"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
