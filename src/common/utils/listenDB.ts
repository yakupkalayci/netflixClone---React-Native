// Import React
import { Dispatch, SetStateAction } from 'react';

// Import Firebase Database
import { firebase } from '@react-native-firebase/database';

// Import Utils
import { movieListDataParser } from './movieListDataParser';

// Import Type
import { MovieListData } from 'src/screens/home/_types/movieListData';

export const listenDB = (
  userID: string,
  setMovieList: Dispatch<SetStateAction<MovieListData[] | undefined>>,
  setLoading?: Dispatch<SetStateAction<boolean>>
) => {
  setLoading && setLoading(true);
  const reference = firebase
    .app()
    .database('https://netflix-1b6c5-default-rtdb.europe-west1.firebasedatabase.app/')
    .ref('/users/' + userID + '/movies');

  reference.on('value', (snapshot) => {
    const data = snapshot.val();

    data && setMovieList(Object.keys(data).length ? movieListDataParser(data) : []);
    setLoading && setLoading(false);
  });
};
