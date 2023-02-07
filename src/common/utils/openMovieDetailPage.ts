// Import i18next
import { t } from 'i18next';

type params = {
  title: string;
  genre: string | object | undefined;
  desc: string | undefined;
  imgLink;
  vote;
  id;
  userID;
  movieList
};

export const openMovieDetailPage = (navigation: any, params: params) => {
  navigation.navigate(t('PAGE_TITLES.MOVIE_DETAIL'), params);
};
