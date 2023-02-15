// Import React
import { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Import Redux
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

// Import Navigation Context
import { NavigationContext } from '@react-navigation/native';

// Import i18next
import { t } from 'i18next';

// Import Constants
import { CUSTOM_COLORS, CUSTOM_COLORS_TYPE } from 'src/common/constants/colors/customColors';
import { CUSTOM_ICON_SIZES } from 'src/common/constants/icon/iconSizes';

// Import Icons
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Utils
import { addMovie } from 'src/common/utils/addMovie';
import { openMovieDetailPage } from 'src/common/utils/openMovieDetailPage';
import { fetchGenre } from 'src/common/utils/fetchGenre';
import { checkMovieList } from 'src/common/utils/checkMovieList';

// Import Components
import InfoModal from 'src/components/info-modal/InfoModal';
import CustomButton from 'src/components/cta/button/CustomButton';
import AddButton from 'src/components/cta/add-button/AddButton';

// styles
import styles from 'src/assets/styles/Details.style';

// Import Types
import { MovieListData } from 'src/screens/home/_types/movieListData';
import { MoviesWGenreData, TrendingMoviesData } from 'src/store/actions/movies/_types/apiTypes';

interface DetailsProps {
  contentType: 'preview' | 'movie';
  movieData: MoviesWGenreData | TrendingMoviesData;
  movieList: MovieListData[] | undefined;
  setShowContent: Dispatch<SetStateAction<boolean>>;
}

const Details = (props: DetailsProps) => {
  // destruct props
  const { contentType, movieData, movieList, setShowContent } = props;

  // useSelector
  const user = useSelector((state: RootState) => state?.user);

  // variables
  const navigation = useContext(NavigationContext);
  const title = movieData.title;
  const desc = movieData.overview;
  const vote = movieData.vote_average;
  const id = movieData.id;
  const imgLink = 'https://image.tmdb.org/t/p/w500' + movieData.poster_path;
  const userID = user?.uid;

  // useState
  const [genre, setGenre] = useState<{ name: string; id: number }>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [movieListCheck, setMovieListCheck] = useState<boolean>(false);

  // useEffect
  useEffect(() => {
    // method for getting the genre name according to genre id
    const getGenre = async () => {
      setGenre(await fetchGenre(movieData.genre_ids[0]));
    };

    getGenre();
    checkMovieList(movieData.id, movieList, setMovieListCheck);
  }, []);

  useEffect(() => {
    checkMovieList(movieData.id, movieList, setMovieListCheck);
  }, [movieList]);

  return (
    <View
      style={contentType === 'movie' ? styles.detailsContainer : [styles.detailsContainer, styles.playButtonContainer]}
    >
      {contentType === 'movie' ? (
        <>
          <View style={styles.header}>
            <View>
              <Text style={styles.title} numberOfLines={1}>
                {movieData.title}
              </Text>
              <Text style={styles.genre}>{genre?.name}</Text>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <CustomButton
              title={
                movieListCheck
                  ? t('GLOBAL.COMPONENTS.BUTTON.TITLES.ADDED')
                  : t('GLOBAL.COMPONENTS.BUTTON.TITLES.MY_LIST')
              }
              icon={
                <AddButton
                  iconName="plus"
                  added={movieListCheck}
                  iconColor={movieListCheck ? CUSTOM_COLORS.GREEN : CUSTOM_COLORS.WHITE}
                />
              }
              textColor={movieListCheck ? CUSTOM_COLORS_TYPE.GREEN : CUSTOM_COLORS_TYPE.WHITE}
              bgColor={CUSTOM_COLORS_TYPE.MAIN_BACKGROUND_COLOR}
              onPress={() => {
                addMovie(title, desc, imgLink, id, vote, movieList, genre, userID);
                setTimeout(() => setShowContent(false), 1000);
              }}
              extraStyles={{ padding: 3 }}
            />
            <CustomButton
              title={t('GLOBAL.COMPONENTS.BUTTON.TITLES.DETAILS')}
              icon={
                <MaterialIcon
                  name="page-next-outline"
                  color={CUSTOM_COLORS.WHITE}
                  size={CUSTOM_ICON_SIZES.SEMIMEDIUM}
                />
              }
              textColor={CUSTOM_COLORS_TYPE.WHITE}
              bgColor={CUSTOM_COLORS_TYPE.MAIN_BACKGROUND_COLOR}
              onPress={() => {
                openMovieDetailPage(navigation, { title, genre, desc, imgLink, vote, id, userID, movieList });
                setTimeout(() => setShowContent(false), 1000);
              }}
              extraStyles={{ padding: 3 }}
            />
          </View>
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
