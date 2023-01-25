import {createSlice} from '@reduxjs/toolkit';

// const activeUser = {};

const usersData = {
  users: [
    {
      username: 'test',
      password: '1234',
      movieList: [],
    },
    {
      username: 'yakupkalayci',
      password: '1234',
      movieList: [],
    },
  ],
  activeUser: {},
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersData,
  },
  reducers: {
    login: (state, action) => {
      state.usersData.users.forEach(user => {
        if (
          user.username === action.payload.username &&
          user.password === action.payload.password
        ) {
          state.usersData.activeUser = user;
        }
      });
    },
    logout: state => {
      state.usersData.activeUser = {};
    },
    addToList: (state, action) => {
      let exist = state.usersData.activeUser.movieList.find(
        movie => movie.id === action.payload.id,
      );
      if (!exist) {
        state.usersData.activeUser.movieList.push(action.payload);
      }
    },
    removeFromList: (state, action) => {
      state.usersData.activeUser.movieList =
        state.usersData.activeUser.movieList.filter(
          movie => movie.id !== action.payload.id,
        );
    },
  },
});

export const {login, logout, addToList, removeFromList} = usersSlice.actions;

export default usersSlice.reducer;
