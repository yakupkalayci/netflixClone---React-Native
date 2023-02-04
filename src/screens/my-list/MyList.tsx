// Import React
import { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';

// Import Firebase
import { firebase } from '@react-native-firebase/database';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Import i18next
import { t } from 'i18next';

// Import Utils
import { movieListDataParser } from '../../common/utils/movieListDataParser';
import { emailParser } from '../../common/utils/emailParser';

// Import Components
import Header from '../../components//header/Header';
import MovieListItem from '../../components/movie-list-item/MovieListItem';

// Style
import styles from '../../assets/styles/MyList.styles';

function MyList({ navigation }): JSX.Element {
  // varibles
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  const [movieList, setMovieList] = useState<object[]>();

  const getCurrentUser = () => {
    const currentUser = auth().currentUser;

    if (currentUser) {
      setUser(currentUser);
    }
  };

  // useEffects
  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    const reference = firebase
      .app()
      .database('https://netflix-1b6c5-default-rtdb.europe-west1.firebasedatabase.app/')
      .ref('/users/' + user?.uid + '/movies');

    reference.on('value', (snapshot) => {
      const data = snapshot.val();

      data && Object.keys(data).length ? setMovieList(movieListDataParser(data)) : null;
    });
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>
        {emailParser(user?.email)}
        {t('GLOBAL.LABELS.S_MOVIES')}
      </Text>
      {movieList ? (
        <FlatList
          data={movieList}
          renderItem={({ item }) => (
            <MovieListItem
              title={item.title}
              // genre={item.genre}
              description={item.desc}
              imgLink={item.imgLink}
              id={item.id}
              vote={item.vote}
              movieKey={item?.key}
              userID={user?.uid}
              navigation={navigation}
            />
          )}
        />
      ) : (
        <Text style={styles.infoText}>{t('GLOBAL.LABELS.NO_MOVIE')}</Text>
      )}
    </SafeAreaView>
  );
}

export default MyList;
