// Import React
import { Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Import Video
import Video from 'react-native-video';

// import i18next
import { t } from 'i18next';

// Import Icon
import Icon from 'react-native-vector-icons/FontAwesome';

// Import Constant
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Import Components
import AddButton from 'src/components/add-button/AddButton';

// Import movielist data type
import { MovieListData } from 'src/screens/home/_types/movieListData';

import styles from 'src/assets/styles/MovieDetails.style';

interface MovieDetailsProps {
  vote: number;
  fetchedGenre: undefined;
  addMovie: (
    title: string,
    desc: string,
    imgLink: string,
    id: number,
    vote: number,
    movieList: MovieListData[],
    genre: object | [] | undefined
  ) => void;
  title: string;
  desc: string;
  imgLink: string;
  id: number;
  movieList: MovieListData[];
  genre: [] | object;
  movieListCheck: boolean;
}

function MovieDetails(props: MovieDetailsProps): JSX.Element {
  // destruct props
  const {
    vote,
    fetchedGenre,
    addMovie,
    title,
    desc,
    imgLink,
    id,
    movieList,
    genre,
    movieListCheck
  } = props;

  return (
    <Fragment>
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
              <Icon name="star" color={CUSTOM_COLORS.YELLOW} size={20} />
              <Text style={[styles.text, styles.voteText]}>{vote}</Text>
            </View>
            <Text style={[styles.text, styles.genreText]}>{fetchedGenre ? fetchedGenre?.name : genre?.name}</Text>
          </View>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => addMovie(title, desc, imgLink, id, vote, movieList, genre)}
          >
            {movieListCheck ? (
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
                iconColor={CUSTOM_COLORS.GREEN}
                iconSize={30}
                added={false}
                text={t('GLOBAL.COMPONENTS.BUTTON.TITLES.MY_LIST')}
              />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.text, styles.describtionText]}>{desc}</Text>
        </View>
      </View>
    </Fragment>
  );
}

export default MovieDetails;
