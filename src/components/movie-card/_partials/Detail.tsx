// Import React
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { View, TouchableOpacity } from 'react-native';

// Import Icons
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Utils
import { fetchGenre } from 'src/common/utils/fetchGenre';
import { checkMovieList } from 'src/common/utils/checkMovieList';

// Import Partials
import Header from './_partials/Header';
import ActionButtons from './_partials/ActionButtons';

// Import Components
import InfoModal from 'src/components/info-modal/InfoModal';

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

  // variables
  const imgLink = 'https://image.tmdb.org/t/p/w500' + movieData.poster_path;

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
    setMovieListCheck(() => checkMovieList(movieData.id, movieList));
  }, []);

  useEffect(() => {
    setMovieListCheck(() => checkMovieList(movieData.id, movieList));
  }, [movieList]);

  return (
    <View
      style={contentType === 'movie' ? styles.detailsContainer : [styles.detailsContainer, styles.playButtonContainer]}
    >
      {contentType === 'movie' ? (
        <>
          <Header
            title={movieData.title}
            genre={genre?.name}
            headerStyle={styles.header}
            titleStyle={styles.title}
            genreStyle={styles.genre}
          />
          <ActionButtons
            data={movieData}
            movieListCheck={movieListCheck}
            setShowContent={setShowContent}
            containerStyle={styles.actionButtons}
            genre={genre}
            movieList={movieList}
          />
        </>
      ) : (
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <MaterialIcon name="play-circle-outline" color="#fff" size={37} />
          <InfoModal
            type="video"
            isVisible={modalVisible}
            setIsVisible={setModalVisible}
            title={movieData.title}
            imgLink={imgLink}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Details;
