import {addToList} from '../../store/reducers/usersReducer';

export const addMovie = (
  dispatch,
  title: string,
  genre: object | undefined,
  desc: string,
  imgLink: string,
  id: number,
  vote: number,
) => {
  dispatch(addToList({title, genre, desc, imgLink, id, vote}));
};
