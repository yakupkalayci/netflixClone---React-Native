// Import React
import { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';

// Import i18next
import { t } from 'i18next';

// Import Utils
import { listenDB } from '../../common/utils/listenDB';
import { getCurrentUser } from '../../common/utils/getCurrentUser';
import { emailParser } from '../../common/utils/emailParser';

// Import Components
import Header from '../../components//header/Header';
import MovieListItem from '../../components/movie-list-item/MovieListItem';

// Import Screen Types
import { MyListProps } from '../../navigators/types';

// Style
import styles from '../../assets/styles/MyList.styles';

function MyList({ navigation }: MyListProps): JSX.Element {
  // varibles
  const [user, setUser] = useState(() => getCurrentUser());
  const [movieList, setMovieList] = useState<object[]>();
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect
  useEffect(() => {
    listenDB(user?.uid, setMovieList, setLoading);
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>
        {emailParser(user?.email)}
        {t('GLOBAL.LABELS.S_MOVIES')}
      </Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : movieList ? (
        <FlatList
          data={movieList}
          renderItem={({ item }) => (
            <MovieListItem
              title={item.title}
              genre={item.genre}
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
