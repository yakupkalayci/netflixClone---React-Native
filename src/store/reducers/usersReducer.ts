import {createSlice} from '@reduxjs/toolkit';
import {users} from '../../services/usersData';

const activeUser = {};

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    activeUser,
  },
  reducers: {
    login: (state, action) => {
      users.forEach(user => {
        if (
          user.username === action.payload.username &&
          user.password === action.payload.password
        ) {
          state.activeUser = action.payload;
        }
      });
    },
    logout: state => {
      state.activeUser = {};
    },
  },
});

export const {login, logout} = usersSlice.actions;

export default usersSlice.reducer;
