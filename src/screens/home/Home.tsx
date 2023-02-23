// Import React
import { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, ActivityIndicator } from 'react-native';

// Import Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store/store';
import { getDailyTrendingMovies } from 'src/store/actions/movies/getDailyTrendingMovies';
import { getWeeklyTrendingMovies } from 'src/store/actions/movies/getWeeklyTrendingMovies';
import { getMoviesWithGenre } from 'src/store/actions/movies/getMoviesWithGenre';

// Import Constants
import { MOVIE_SECTION_TYPES } from 'src/common/constants/movie-section/movieSectionTypes';
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Import i18next
import { t } from 'i18next';
import { withTranslation } from 'react-i18next';

// Import Utils
import { getRandomImageIndex } from 'src/common/utils/getRandomImageIndex';
import { addMovie } from 'src/common/utils/addMovie';
import { emailParser } from 'src/common/utils/emailParser';
import { listenDB } from 'src/common/utils/listenDB';
import { checkMovieList } from 'src/common/utils/checkMovieList';

// Import Icons
import Icon from 'react-native-vector-icons/Entypo';
import IconInfo from 'react-native-vector-icons/Foundation';

// Import Partials
import MainImage from './_partials/MainImage';
import ActionButtons from './_partials/ActionButtons';
import MovieSection from './_partials/MovieSection';

// Import Components
import Header from '../../components/header/Header';
import InfoModal from 'src/components/info-modal/InfoModal';
import AddButton from 'src/components/cta/add-button/AddButton';

// Import Types
import { TrendingMoviesData, MoviesWGenreData } from 'src/store/actions/movies/_types/apiTypes';
import { MovieListData } from './_types/movieListData';

// Import Screen Type
import { HomeScreenProps } from 'src/routes/types';

// Style
import styles from 'src/assets/styles/HomeScreen.style';
import { showToast } from 'src/common/utils/showToast';
import { ALERT_TYPE } from 'react-native-alert-notification';

function Home({ navigation }: HomeScreenProps) {
  // useState
  const [randomImageIndex, setRandomImageIndex] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'video' | 'text'>('text');
  const [movieListCheck, setMovieListCheck] = useState<boolean>(false);
  const [movieList, setMovieList] = useState<MovieListData[] | []>();

  // Variables
  const dispatch = useDispatch();
  const dailyTrendingMovies: TrendingMoviesData[] = useSelector(
    (state: RootState) => state?.globalReducer?.getDailyTrendingMovies?.success?.data?.results
  );
  const weeklyTrendingMovies: TrendingMoviesData[] = useSelector(
    (state: RootState) => state?.globalReducer?.getWeeklyTrendingMovies?.success?.data?.results
  );
  const moviesWithGenre: MoviesWGenreData[] = useSelector(
    (state: RootState) => state?.globalReducer?.getMoviesWithGenre?.success?.data?.results
  );
  const user = useSelector((state: RootState) => state?.user);

  const actionButtonData = [
    {
      id: 0,
      onPressFunction: () => {
        movieListCheck
          ? showToast(
              ALERT_TYPE.WARNING,
              t('GLOBAL.COMPONENTS.ALERT.TITLES.WARNING'),
              t('GLOBAL.COMPONENTS.ALERT.MESSAGES.MOVIE_ALREADY_ADDED')
            )
          : addMovie(
              dailyTrendingMovies[randomImageIndex]?.title,
              dailyTrendingMovies[randomImageIndex]?.overview,
              `https://image.tmdb.org/t/p/w500/${dailyTrendingMovies[randomImageIndex]?.poster_path}`,
              dailyTrendingMovies[randomImageIndex]?.id,
              dailyTrendingMovies[randomImageIndex]?.vote_average,
              movieList,
              dailyTrendingMovies[randomImageIndex]?.genre_ids,
              user?.uid
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
            userID={user?.uid}
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
      movieList
    },
    {
      id: 12,
      title: t('GLOBAL.LABELS.POPULAR_TODAY'),
      data: dailyTrendingMovies,
      type: MOVIE_SECTION_TYPES.MOVIE,
      movieList
    },
    {
      id: 13,
      title: t('GLOBAL.LABELS.POPULAR_THIS_WEEK'),
      data: weeklyTrendingMovies,
      type: MOVIE_SECTION_TYPES.MOVIE,
      movieList
    }
  ];

  // useEffects
  useEffect(() => {
    dispatch(getDailyTrendingMovies());
    dispatch(getWeeklyTrendingMovies());
    dispatch(getMoviesWithGenre(10751));
  }, []);

  useEffect(() => {
    listenDB(user?.uid, setMovieList);
  }, [user]);

  useEffect(() => {
    if (dailyTrendingMovies?.length > 0) {
      setRandomImageIndex(getRandomImageIndex(dailyTrendingMovies));
    }
  }, [dailyTrendingMovies]);

  useEffect(() => {
    if (dailyTrendingMovies?.length > 0) {
      setMovieListCheck(() => checkMovieList(dailyTrendingMovies[randomImageIndex]?.id, movieList));
    }
  }, [movieList]);

  if (!user) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        {dailyTrendingMovies ? (
          <>
            <MainImage
              dailyTrendingMovies={dailyTrendingMovies}
              randomImageIndex={randomImageIndex}
              imgStyle={styles.mainPoster}
              viewStyle={styles.imageContainer}
            />
            <ActionButtons actionButtonData={actionButtonData} viewStyle={styles.actions} />
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
        <View style={styles.innerContainer}>
          {movieSectionData.map((item) => (
            <MovieSection
              key={item.id}
              sectionTitle={item.title}
              movieData={item.data}
              contentType={item.type}
              movieList={item.movieList}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default withTranslation()(Home);
