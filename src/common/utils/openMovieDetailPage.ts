// Import i18next
import { t } from 'i18next';

type params = {
  title: string;
  genre: string | object | undefined;
  desc: string;
  imgLink;
  vote;
  id;
  userID;
};

export const openMovieDetailPage = (navigation: any, params: params) => {
  navigation.navigate(t('PAGE_TITLES.MOVIE_DETAIL'), params);
};
