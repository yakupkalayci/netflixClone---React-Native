// Import React
import { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';

// Import utils
import { addMovie } from '../../common/utils/addMovie';
import { listenDB } from '../../common/utils/listenDB';
import { checkMovieList } from '../../common/utils/checkMovieList';

// Import i18next
import { t } from 'i18next';

// Import React-native-video
import Video from 'react-native-video';

// Import Icon
import Icon from 'react-native-vector-icons/FontAwesome';

// Import Components
import Header from '../../components//header/Header';

// styles
import styles from '../../assets/styles/MovieDetail.style';

function MovieDetail({ route, navigation }): JSX.Element {
  // destruct params
  const { title, genre, desc, imgLink, vote, id, userID } = route.params;

  // useState
  const [movieList, setMovieList] = useState([]);
  const [movieListCheck, setMovieListCheck] = useState<boolean>(false);

  // method for checking if the movie is exist on the databse or not. If exists the apperance of add button will change in the ui.
  // const checkMovieList = () => setMovieListCheck(() => movieList.find((movie) => movie.id === id) ? true : false);

  // useEffect
  useEffect(() => {
    listenDB(userID, setMovieList);
    checkMovieList(id, movieList, setMovieListCheck);
  }, []);

  useEffect(() => {
    checkMovieList(id, movieList, setMovieListCheck);
  }, [movieList]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.videoContainer}>
            <Video
              source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
              controls={true}
              resizeMode={'cover'}
              poster={imgLink}
              style={styles.video}
            />
          </View>
          <View style={styles.movieDetails}>
            <Text style={[styles.text, styles.title]}>{title}</Text>
            <View style={styles.upperDetails}>
              <View style={styles.upperLeft}>
                <View style={styles.voteContainer}>
                  <Icon name="star" color="yellow" size={20} />
                  <Text style={[styles.text, styles.voteText]}>{vote}</Text>
                </View>
                <Text style={[styles.text, styles.genreText]}>{genre?.name}</Text>
              </View>
              <TouchableOpacity style={styles.actionButton} onPress={() => addMovie(title, desc, imgLink, id, vote, movieList)}>
                {movieListCheck ? (
                  <>
                    <Icon name="plus" size={30} color="green" />
                    <Text style={[styles.text, styles.added]}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.ADDED')}</Text>
                  </>
                ) : (
                  <>
                    <Icon name="plus" size={30} color="#fff" />
                    <Text style={styles.text}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.MY_LIST')}</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
            <View>
              <Text style={[styles.text, styles.describtionText]}>{desc}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MovieDetail;
