// Import React
import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';

// Import i18next
import { t } from 'i18next';

// Import Redux
import { useAppSelector } from '../../store/hooks';

// Import Components
import Header from '../../components//header/Header';
import MovieListItem from '../../components/movie-list-item/MovieListItem';

// Style
import styles from '../../assets/styles/MyList.styles';

function MyList({ navigation }): JSX.Element {
  // varibles
  const user = useAppSelector((state) => state.users.usersData.activeUser);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>{user.username}{t('GLOBAL.LABELS.S_MOVIES')}</Text>
      {user?.movieList?.length ? (
        <FlatList
          data={user.movieList}
          renderItem={({ item }) => (
            <MovieListItem
              title={item.title}
              genre={item.genre}
              description={item.desc}
              imgLink={item.imgLink}
              id={item.id}
              vote={item.vote}
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
