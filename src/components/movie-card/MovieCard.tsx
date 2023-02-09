// Import React
import { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';

// Import Partials
import Details from './_partials/Detail';

// Styles
import styles from 'src/assets/styles/MovieCard.style';

// Import Types
import { MovieListData } from 'src/screens/home/_types/movieListData';
import { MoviesWGenreData, TrendingMoviesData } from 'src/store/actions/movies/_types/apiTypes';

interface MovieCardProps {
  contentType: 'preview' | 'movie';
  movieData: MoviesWGenreData | TrendingMoviesData;
  movieList: MovieListData[] | undefined;
  userID?: string;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  // destruct props
  const { contentType, movieData, movieList, userID } = props;

  // variables
  const imgLink = 'https://image.tmdb.org/t/p/w500' + movieData.poster_path;

  // useState
  const [showContent, setShowContent] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowContent(!showContent)}>
      <Image
        source={{ uri: imgLink }}
        style={
          contentType === 'preview'
            ? {
                width: 100,
                height: 100,
                borderRadius: 140 / 2,
                resizeMode: 'contain'
              }
            : { width: 140, height: 180 }
        }
      />
      {showContent && (
        <Details
          contentType={contentType}
          movieData={movieData}
          movieList={movieList}
          userID={userID}
          setShowContent={setShowContent}
        />
      )}
    </TouchableOpacity>
  );
}

export default MovieCard;
