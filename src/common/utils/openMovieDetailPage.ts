type params = {
  title: string;
  genre: string | object | undefined;
  desc: string | undefined;
  imgLink;
  vote;
  id;
  userID;
};

export const openMovieDetailPage = (navigation: any, params: params) => {
  navigation.navigate('Movie Detail', params);
};
