// Import React
import { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native';

// Import Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store/store';
import { getDailyTrendingMovies } from '../../store/actions/movies/getDailyTrendingMovies';
import { getWeeklyTrendingMovies } from '../../store/actions/movies/getWeeklyTrendingMovies';
import { getMoviesWithGenre } from '../../store/actions/movies/getMoviesWithGenre';

// Import i18next
import { t } from 'i18next';

// Import Utils
import { getRandomImageIndex } from '../../common/utils/getRandomImageIndex';
import { addMovie } from '../../common/utils/addMovie';
import { getCurrentUser } from '../../common/utils/getCurrentUser';
import { emailParser } from '../../common/utils/emailParser';
import { listenDB } from '../../common/utils/listenDB';
import { checkMovieList } from '../../common/utils/checkMovieList';

// Import Icons
import Icon from 'react-native-vector-icons/Entypo';
import IconInfo from 'react-native-vector-icons/Foundation';

// Import Components
import Header from '../../components/header/Header';
import MovieSection from '../../components/movie-section/MovieSection';
import InfoModal from '../../components/info-modal/InfoModal';
import AddButton from '../../components/add-button/AddButton';
import ActionButton from '../../components/action-button/ActionButton';

// Style
import styles from '../../assets/styles/HomeScreen.style';

function Home({ navigation }) {
  // useState
  const [user, setUser] = useState(() => getCurrentUser());
  const [randomImageIndex, setRandomImageIndex] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'video' | 'text'>('text');
  const [movieListCheck, setMovieListCheck] = useState<boolean>(false);
  const [movieList, setMovieList] = useState([]);

  // Variables
  const dispatch = useDispatch();
  const dailyTrendingMovies = useSelector(
    (state: RootState) => state?.globalReducer?.getDailyTrendingMovies?.success?.data?.results
  );
  const weeklyTrendingMovies = useSelector(
    (state: RootState) => state?.globalReducer?.getWeeklyTrendingMovies?.success?.data?.results
  );
  const moviesWithGenre = useSelector(
    (state: RootState) => state?.globalReducer?.getMoviesWithGenre?.success?.data?.results
  );

  const actionButtonData = [
    {
      id: 0,
      onPressFunction: () => {
        addMovie(
          dailyTrendingMovies[randomImageIndex]?.title,
          dailyTrendingMovies[randomImageIndex]?.overview,
          `https://image.tmdb.org/t/p/w500/${dailyTrendingMovies[randomImageIndex]?.poster_path}`,
          dailyTrendingMovies[randomImageIndex]?.id,
          dailyTrendingMovies[randomImageIndex]?.vote_average,
          movieList
        );
      },
      style: styles.actionButton,
      children: movieListCheck ? (
        <AddButton iconName="plus" iconColor="green" iconSize={30} added={true} text={t('GLOBAL.COMPONENTS.BUTTON.TITLES.ADDED')} />
      ) : (
        <AddButton iconName="plus" iconColor="#fff" iconSize={30} added={false} text={t('GLOBAL.COMPONENTS.BUTTON.TITLES.MY_LIST')} />
      )
    },
    {
      id: 1,
      onPressFunction: () => {
        setModalVisible(!modalVisible);
        setModalType('video');
      },
      style: [styles.actionButton, styles.actionButtonPlay],
      children: (
        <>
          <InfoModal
            isVisible={modalVisible}
            setIsVisible={setModalVisible}
            title={dailyTrendingMovies && dailyTrendingMovies[randomImageIndex]?.title}
            imgLink={
              dailyTrendingMovies &&
              `https://image.tmdb.org/t/p/w500/${dailyTrendingMovies[randomImageIndex]?.poster_path}`
            }
            type={modalType}
          />
          <Icon name="controller-play" size={30} color="#000" />
          <Text style={[styles.actionText, styles.actionButtonPlayText]}>
            {t('GLOBAL.COMPONENTS.BUTTON.TITLES.PLAY')}
          </Text>
        </>
      )
    },
    {
      id: 2,
      onPressFunction: () => {
        setModalVisible(!modalVisible);
        setModalType('text');
      },
      style: styles.actionButton,
      children: (
        <>
          <InfoModal
            isVisible={modalVisible}
            setIsVisible={setModalVisible}
            title={dailyTrendingMovies && dailyTrendingMovies[randomImageIndex]?.title}
            originalTitle={dailyTrendingMovies && dailyTrendingMovies[randomImageIndex]?.original_title}
            description={dailyTrendingMovies && dailyTrendingMovies[randomImageIndex]?.overview}
            vote={dailyTrendingMovies && dailyTrendingMovies[randomImageIndex]?.vote_average}
            id={dailyTrendingMovies && dailyTrendingMovies[randomImageIndex]?.id}
            genre={''}
            imgLink={
              dailyTrendingMovies &&
              `https://image.tmdb.org/t/p/w500/${dailyTrendingMovies[randomImageIndex]?.poster_path}`
            }
            type={modalType}
            userID={user.uid}
          />
          <IconInfo name="info" size={30} color="#fff" />
          <Text style={styles.actionText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.INFO')}</Text>
        </>
      )
    }
  ];

  // useEffects
  useEffect(() => {
    dispatch(getDailyTrendingMovies());
    dispatch(getWeeklyTrendingMovies());
    dispatch(getMoviesWithGenre(10751));
    listenDB(user?.uid, setMovieList);
  }, []);

  useEffect(() => {
    if (dailyTrendingMovies?.length > 0) {
      setRandomImageIndex(getRandomImageIndex(dailyTrendingMovies));
    }
  }, [dailyTrendingMovies]);

  useEffect(() => {
    if (dailyTrendingMovies?.length > 0) {
      checkMovieList(dailyTrendingMovies[randomImageIndex]?.id, movieList, setMovieListCheck);
    }
  }, [movieList]);

  if (!user) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.imageContainer}>
          {dailyTrendingMovies ? (
            <Image
              source={{
                uri: dailyTrendingMovies
                  ? 'https://image.tmdb.org/t/p/w500' + dailyTrendingMovies[randomImageIndex]?.poster_path
                  : ''
              }}
              style={styles.mainPoster}
              resizeMode={'contain'}
            />
          ) : null}
        </View>
        <View style={styles.actions}>
          {actionButtonData.map((item) => (
            <ActionButton key={item.id} onPressFunction={item.onPressFunction} style={item.style}>
              {item.children}
            </ActionButton>
          ))}
        </View>
        <View style={styles.innerContainer}>
          <MovieSection title={t('GLOBAL.LABELS.PREVIEWS')} data={weeklyTrendingMovies} type="preview" />
          <MovieSection
            title={t('GLOBAL.LABELS.CONTIUNE_WATCHING_FOR') + ` ${emailParser(user?.email)}`}
            data={moviesWithGenre}
            type="movie"
            movieList={movieList}
            userID={user.uid}
          />
          <MovieSection
            title={t('GLOBAL.LABELS.POPULAR_TODAY')}
            data={dailyTrendingMovies}
            type="movie"
            movieList={movieList}
            userID={user.uid}
          />
          <MovieSection
            title={t('GLOBAL.LABELS.POPULAR_THIS_WEEK')}
            data={weeklyTrendingMovies}
            type="movie"
            movieList={movieList}
            userID={user.uid}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
