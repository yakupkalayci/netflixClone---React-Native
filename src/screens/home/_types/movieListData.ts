export type MovieListData = {
  desc: string;
  genre: { name: string; id: number } | number[];
  id: number;
  imgLink: string;
  title: string;
  vote: number;
  key: string;
};
