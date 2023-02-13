// Import React
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

// Import Compontns
import MovieCard from 'src/components/movie-card/MovieCard';

// styles
import styles from 'src/assets/styles/MovieSection.style';

// Import Types
import { TrendingMoviesData, MoviesWGenreData } from 'src/store/actions/movies/_types/apiTypes';
import { MovieListData } from 'src/screens/home/_types/movieListData';

interface MovieSectionProps {
  sectionTitle: string;
  movieData: TrendingMoviesData[] | MoviesWGenreData[];
  contentType: 'preview' | 'movie';
  movieList: MovieListData[] | undefined;
  userID?: string;
}

function MovieSection(props: MovieSectionProps): JSX.Element {
  // destruct props
  const { sectionTitle, movieData, contentType, movieList, userID } = props;

  return (
    <View>
      <Text style={styles.titles}>{sectionTitle}</Text>
      {movieData ? (
        <FlatList
          data={movieData}
          renderItem={({ item }) => (
            <MovieCard contentType={contentType} movieData={item} movieList={movieList} userID={userID} />
          )}
          horizontal={true}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
}

export default MovieSection;
