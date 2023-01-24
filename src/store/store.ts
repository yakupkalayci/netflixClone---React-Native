import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './reducers/usersReducer';

export const store = configureStore({
  reducer: {
    // movies: moviesReducer,
    // lists: listsReducer,
    users: usersReducer
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;