// Import React
import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Import Firebase Database
import { firebase } from '@react-native-firebase/database';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Import utils
import { openMovieDetailPage } from 'src/common/utils/openMovieDetailPage';
import { fetchGenre } from 'src/common/utils/fetchGenre';

// Import i18next
import { t } from 'i18next';

// Import Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// Import Components
import NavigationItem from 'src/components/navigation-item/NavigationItem';

// Import Data Types
import { MovieListData } from 'src/screens/home/_types/movieListData';
import { MyListNavigationProp } from 'src/routes/types';

// styles
import styles from 'src/assets/styles/MovieListItem.style';

interface MovieListItemProps {
  data: MovieListData;
  userID: string | undefined;
  navigation: MyListNavigationProp;
  movieList: MovieListData[];
}

function MovieListItem(props: MovieListItemProps): JSX.Element {
  // destruct props
  const { data, userID, navigation, movieList } = props;

  // destruct data
  const { desc, genre, id, imgLink, title, vote, key } = data;

  // useState
  const [fetchedGenre, setFetchedGenre] = useState<{ name: string; id: number }>();

  // method for remove movie from my list
  const removeMovie = async () => {
    await firebase
      .app()
      .database('https://netflix-1b6c5-default-rtdb.europe-west1.firebasedatabase.app/')
      .ref('/users/' + userID + '/movies/' + key)
      .remove();
  };

  useEffect(() => {
    if (Array.isArray(genre)) {
      // method for getting the genre name according to genre id
      const getGenre = async () => {
        setFetchedGenre(await fetchGenre(genre[0]));
      };

      getGenre();
    }
  }, [genre]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imgLink }} style={styles.image} />
        <TouchableOpacity style={styles.removeButton} onPress={() => removeMovie()}>
          <Text style={styles.buttonText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.REMOVE')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <NavigationItem
          target={title}
          onPress={() => openMovieDetailPage(navigation, { title, genre, desc, imgLink, vote, id, userID, movieList })}
          style={styles.title}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.genre}>{fetchedGenre?.name ? fetchedGenre?.name : fetchedGenre?.name}</Text>
          <View style={styles.vote}>
            <Icon name="star" color={CUSTOM_COLORS.YELLOW} size={20} />
            <Text style={styles.voteText}>{vote?.toFixed(2)}</Text>
          </View>
        </View>
        <Text style={styles.description}>{desc}</Text>
      </View>
    </View>
  );
}

export default MovieListItem;
