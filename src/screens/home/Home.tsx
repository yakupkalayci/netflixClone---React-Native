// Import React
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Modal, Linking } from 'react-native';

// Import i18next
import { t } from 'i18next';

// Import Redux
import { useAppSelector, useAppDispatch } from '../../store/hooks';

// Import Services
import { fetchMovies } from '../../services/actions/fetchMovies';

// Import Utils
import { getRandomImageNumber } from '../../common/utils/getRandomImageNumber';
import { addMovie } from '../../common/utils/addMovie';
import { checkMovieList } from '../../common/utils/checkMovieList';
import { showToast } from '../../common/utils/showToast';

// Import Icons
import Icon from 'react-native-vector-icons/Entypo';
import IconInfo from 'react-native-vector-icons/Foundation';
import IconClose from 'react-native-vector-icons/Fontisto';

// Import Alert Notification
import { AlertNotificationRoot, ALERT_TYPE } from 'react-native-alert-notification';

// Import Components
import Header from '../../components/header/Header';
import MovieSection from '../../components/movie-section/MovieSection';

// Style
import styles from '../../assets/styles/HomeScreen.style';

export type MoviesObjectType = {
  day: [];
  week: [];
  contiuneWatching: [];
};

function Home({ navigation }): JSX.Element {
  // useState
  const [movies, setMovies] = useState<MoviesObjectType>({
    day: [],
    week: [],
    contiuneWatching: []
  });
  const [randomImage, setRandomImage] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Variables
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector((state) => state.users.usersData.activeUser);

  const imgLink = 'https://image.tmdb.org/t/p/w500' + movies?.day[randomImage]?.poster_path;
  const title = movies.day[randomImage]?.title;
  const genre = undefined;
  const desc = movies.day[randomImage]?.overview;
  const id = movies.day[randomImage]?.id;
  const vote = movies.day[randomImage]?.vote_average;

  // Method for open Youtube video
  const handleOpenYoutube = () => {
    Linking.openURL('https://www.youtube.com/watch?v=82I1ErFD63U');
  };


  // useEffect
  useEffect(() => {
    fetchMovies(setMovies);
    getRandomImageNumber(movies, setRandomImage);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AlertNotificationRoot theme="dark">
        <Header navigation={navigation} />
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500' + movies.day[randomImage]?.poster_path
              }}
              style={styles.mainPoster}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                addMovie(dispatch, title, genre, desc, imgLink, id, vote);
                showToast(ALERT_TYPE.SUCCESS, t('GLOBAL.COMPONENTS.ALERT.TITLES.SUCCESS'), t('GLOBAL.COMPONENTS.ALERT.MESSAGES.MOVIE_ADDED'));
              }}
            >
              {checkMovieList(useAppSelector, movies.day[randomImage]?.id) ? (
                <>
                  <Icon name="plus" size={30} color="green" />
                  <Text style={[styles.actionText, styles.added]}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.ADDED')}</Text>
                </>
              ) : (
                <>
                  <Icon name="plus" size={30} color="#fff" />
                  <Text style={styles.actionText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.MY_LIST')}</Text>
                </>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.actionButtonPlay]}
              onPress={() => handleOpenYoutube()}
            >
              <Icon name="controller-play" size={30} color="#000" />
              <Text style={[styles.actionText, styles.actionButtonPlayText]}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.PLAY')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(!modalVisible)}>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.modalView}>
                  <View style={styles.modalHeader}>
                    <Text style={[styles.modalText, styles.modalTitle]}>Title: {movies.day[randomImage]?.title}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeBtn}>
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
              <Text style={styles.actionText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.INFO')}</Text>
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
            <MovieSection title="Bu Hafta Popüler" data={movies?.week} type="movie" />
          </View>
        </ScrollView>
      </AlertNotificationRoot>
    </SafeAreaView>
  );
}

export default Home;
