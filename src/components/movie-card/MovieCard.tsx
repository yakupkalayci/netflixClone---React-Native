// Import React
import { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';

// Import Partials
import Details from './_partials/Detail';

// Styles
import styles from '../../assets/styles/MovieCard.style';

interface MovieCardProps {
  type: 'preview' | 'movie';
  imgName: string;
  title: string;
  genres: number[];
  desc: string;
  id: number;
  vote: number;
  movieList: [];
  userID?: object;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  // destruct props
  const { type, imgName, title, genres, desc, id, vote, movieList, userID } = props;

  // variables
  const imgLink = 'https://image.tmdb.org/t/p/w500' + imgName;

  // useState
  const [showContent, setShowContent] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowContent(!showContent)}>
      <Image
        source={{ uri: imgLink }}
        style={
          type === 'preview'
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
          type={type}
          title={title}
          genres={genres}
          desc={desc}
          imgLink={imgLink}
          id={id}
          vote={vote}
          movieList={movieList}
          userID={userID}
        />
      )}
    </TouchableOpacity>
  );
}

export default MovieCard;
