// Import React
import { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';

// Import Constants
import { MOVIE_SECTION_TYPES } from '../../common/constants/movie-section/movieSectionTypes';
import { CUSTOM_COLORS } from '../../common/constants/colors/customColors';

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

// Import Types
import { TrendingMoviesData, MoviesWGenreData } from '../../store/actions/movies/_types/apiTypes';

// Import Screen Type
import { HomeScreenProps } from 'src/navigators/types';

// Style
import styles from '../../assets/styles/HomeScreen.style';

export type MovieListData = {
  desc: string;
  genre: object | [];
  id: number;
  imgLink: string;
  title: string;
  vote: number
}

function Home({ navigation }: HomeScreenProps) {
  // useState
  const [user, setUser] = useState(() => getCurrentUser());
  const [randomImageIndex, setRandomImageIndex] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'video' | 'text'>('text');
  const [movieListCheck, setMovieListCheck] = useState<boolean>(false);
  const [movieList, setMovieList] = useState<MovieListData[]>();

  // Variables
  const dispatch = useDispatch();
  const dailyTrendingMovies:TrendingMoviesData[] = useSelector(
    (state: RootState) => state?.globalReducer?.getDailyTrendingMovies?.success?.data?.results
  );
  const weeklyTrendingMovies:TrendingMoviesData[] = useSelector(
    (state: RootState) => state?.globalReducer?.getWeeklyTrendingMovies?.success?.data?.results
  );
  const moviesWithGenre:MoviesWGenreData[] = useSelector(
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
          movieList,
          dailyTrendingMovies[randomImageIndex]?.genre_ids
        );
      },
      style: styles.actionButton,
      children: movieListCheck ? (
        <AddButton
          iconName="plus"
          iconColor={CUSTOM_COLORS.GREEN}
          iconSize={30}
          added={true}
          text={t('GLOBAL.COMPONENTS.BUTTON.TITLES.ADDED')}
        />
      ) : (
        <AddButton
          iconName="plus"
          iconColor={CUSTOM_COLORS.WHITE}
          iconSize={30}
          added={false}
          text={t('GLOBAL.COMPONENTS.BUTTON.TITLES.MY_LIST')}
        />
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
          <Icon name="controller-play" size={30} color={CUSTOM_COLORS.BLACK} />
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
            genre={dailyTrendingMovies && dailyTrendingMovies[randomImageIndex]?.genre_ids}
            imgLink={
              dailyTrendingMovies &&
              `https://image.tmdb.org/t/p/w500/${dailyTrendingMovies[randomImageIndex]?.poster_path}`
            }
            type={modalType}
            userID={user.uid}
          />
          <IconInfo name="info" size={30} color={CUSTOM_COLORS.WHITE} />
          <Text style={styles.actionText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.INFO')}</Text>
        </>
      )
    }
  ];

  const movieSectionData = [
    {
      id: 10,
      title: t('GLOBAL.LABELS.PREVIEWS'),
      data: weeklyTrendingMovies,
      type: MOVIE_SECTION_TYPES.PREVİEW
    },
    {
      id: 11,
      title: t('GLOBAL.LABELS.CONTIUNE_WATCHING_FOR') + ` ${emailParser(user?.email)}`,
      data: moviesWithGenre,
      type: MOVIE_SECTION_TYPES.MOVIE,
      movieList,
      userID: user.uid
    },
    {
      id: 12,
      title: t('GLOBAL.LABELS.POPULAR_TODAY'),
      data: dailyTrendingMovies,
      type: MOVIE_SECTION_TYPES.MOVIE,
      movieList,
      userID: user.uid
    },
    {
      id: 13,
      title: t('GLOBAL.LABELS.POPULAR_THIS_WEEK'),
      data: weeklyTrendingMovies,
      type: MOVIE_SECTION_TYPES.MOVIE,
      movieList,
      userID: user.uid
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
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
        <View style={styles.actions}>
          {actionButtonData.map((item) => (
            <ActionButton key={item.id} onPressFunction={item.onPressFunction} style={item.style}>
              {item.children}
            </ActionButton>
          ))}
        </View>
        <View style={styles.innerContainer}>
          {movieSectionData.map((item) => (
            <MovieSection
              key={item.id}
              title={item.title}
              data={item.data}
              type={item.type}
              movieList={item.movieList}
              userID={item.userID}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
