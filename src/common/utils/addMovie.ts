// Import Firebase Databse
import { firebase } from '@react-native-firebase/database';

// Import i18next
import { t } from 'i18next';

// Import Utils
import { getCurrentUser } from './getCurrentUser';
import { showToast } from './showToast';
import { authErrorParser } from './authErrorParser';

// Import Alert Types
import { ALERT_TYPE } from 'react-native-alert-notification';
import { movieListDataParser } from './movieListDataParser';

export const addMovie = (
  title: string,
  desc: string,
  imgLink: string,
  id: number,
  vote: number,
  movieList: [],
  genre: object | [] | undefined
) => {
  const user = getCurrentUser();

  const result = movieList.length ? movieListDataParser(movieList).find((movie) => movie.id === id) : undefined;

  if (result) {
    showToast(
      ALERT_TYPE.WARNING,
      t('GLOBAL.COMPONENTS.ALERT.TITLES.WARNING'),
      t('GLOBAL.COMPONENTS.ALERT.MESSAGES.MOVIE_ALREADY_ADDED')
    );
  } else {
    const reference = firebase
      .app()
      .database('https://netflix-1b6c5-default-rtdb.europe-west1.firebasedatabase.app/')
      .ref('/users/' + user?.uid + '/movies')
      .push();

    reference
      .set({ title, genre, desc, imgLink, id, vote })
      .then(() =>
        showToast(
          ALERT_TYPE.SUCCESS,
          t('GLOBAL.COMPONENTS.ALERT.TITLES.SUCCESS'),
          t('GLOBAL.COMPONENTS.ALERT.MESSAGES.MOVIE_ADDED')
        )
      )
      .catch((err) =>
        showToast(ALERT_TYPE.DANGER, t('GLOBAL.COMPONENTS.ALERT.TITLES.ERROR'), authErrorParser(err.message))
      );
  }
};
