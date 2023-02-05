// Import React
import { View, Text, FlatList } from 'react-native';

// Import Compontns
import MovieCard from '../movie-card/MovieCard';

// styles
import styles from '../../assets/styles/MovieSection.style';

interface MovieSectionProps {
  title: string;
  data: [];
  type: 'preview' | 'movie';
  movieList?: [];
  userID?: string;
}

function MovieSection(props: MovieSectionProps): JSX.Element {
  // destruct props
  const { title, data, type, movieList, userID } = props;

  return (
    <View>
      <Text style={styles.titles}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MovieCard
            type={type}
            imgName={item?.poster_path}
            title={item?.title}
            genres={item?.genre_ids}
            desc={item?.overview}
            id={item?.id}
            vote={item?.vote_average}
            movieList={movieList}
            userID={userID}
          />
        )}
        horizontal={true}
      />
    </View>
  );
}

export default MovieSection;
