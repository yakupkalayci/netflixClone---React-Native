// Import React
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Import Redux
import { useAppDispatch } from '../../store/hooks';
import { removeFromList } from '../../store/reducers/usersReducer';

// Import i18next
import { t } from 'i18next';

// Import Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from '../../assets/styles/MovieListItem.style';

interface MovieListItemProps {
  imgLink: string;
  title: string;
  genre: object;
  description: string;
  id: number;
  vote: number;
}

function MovieListItem(props: MovieListItemProps): JSX.Element {
  // destruct props
  const { imgLink, title, genre, description, id, vote } = props;

  // variables
  const dispatch = useAppDispatch();

  // method for remove movie from my list
  const removeMovie = (id: number) => {
    dispatch(removeFromList({ id }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imgLink }} style={styles.image} />
        <TouchableOpacity style={styles.removeButton} onPress={() => removeMovie(id)}>
          <Text style={styles.buttonText}>{t('GLOBAL.COMPONENTS.BUTTON.TITLES.REMOVE')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.genre}>{genre?.name}</Text>
          <View style={styles.vote}>
            <Icon name="star" color="yellow" size={20} />
            <Text style={styles.voteText}>{vote?.toFixed(2)}</Text>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

export default MovieListItem;
