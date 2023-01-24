import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import IconInfo from 'react-native-vector-icons/Foundation';
import IconClose from 'react-native-vector-icons/Fontisto';

import {useAppSelector} from '../../store/hooks';

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

function HomeScreen(): JSX.Element {
  const [movies, setMovies] = useState<MoviesObjectType>({
    day: [],
    week: [],
    contiuneWatching: [],
  });
  const [randomImage, setRandomImage] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const activeUser = useAppSelector(state => state.users.activeUser);


  useEffect(() => {
    fetchMovies(setMovies);
    getRandomImageNumber(movies, setRandomImage);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
          <TouchableOpacity style={styles.actionButton}>
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
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.closeBtn}>
                  <IconClose name="close" color="red" size={20} />
                </TouchableOpacity>
                <Text style={styles.modalText}>
                  Title: {movies.day[randomImage]?.title}
                </Text>
                <Text style={styles.modalText}>
                  Original Title: {movies.day[randomImage]?.original_title}
                </Text>
                <Text style={styles.modalText}>
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
