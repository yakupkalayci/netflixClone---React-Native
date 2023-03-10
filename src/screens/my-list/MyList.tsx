// Import React
import { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';

// Import Redux
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

// Import i18next
import { t } from 'i18next';
import { withTranslation } from 'react-i18next';

// Import Utils
import { listenDB } from 'src/common/utils/listenDB';
import { emailParser } from 'src/common/utils/emailParser';

// Import Partials
import MovieListItem from './_partials/MovieListItem';

// Import Components
import Header from 'src/components//header/Header';

// Import Screen Types
import { MyListProps } from 'src/routes/types';

// Import Data Types
import { MovieListData } from '../home/_types/movieListData';

// Style
import styles from 'src/assets/styles/MyList.styles';

function MyList({ navigation }: MyListProps): JSX.Element {

  // useSelector
  const user = useSelector((state: RootState) => state?.user);

  // useState
  const [movieList, setMovieList] = useState<MovieListData[]>();
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
            <MovieListItem data={item} userID={user?.uid} navigation={navigation} movieList={movieList} />
          )}
        />
      ) : (
        <Text style={styles.infoText}>{t('GLOBAL.LABELS.NO_MOVIE')}</Text>
      )}
    </SafeAreaView>
  );
}

export default withTranslation()(MyList);
