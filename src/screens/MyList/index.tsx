import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import {useAppSelector} from '../../store/hooks';

import Header from '../../components/header';
import MovieListItem from '../../components/movie-list-item';

import styles from './styles';

function MyList({navigation}): JSX.Element {
  const user = useAppSelector(state => state.users.usersData.activeUser);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>{user.username}'s Movies</Text>
      {user?.movieList?.length ? (
        <FlatList
          data={user.movieList}
          renderItem={({item}) => (
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
        <Text style={styles.infoText}>No movie in your list!</Text>
      )}
    </SafeAreaView>
  );
}

export default MyList;
