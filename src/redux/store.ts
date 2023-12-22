import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './slices';
import { useDispatch } from 'react-redux';

// import reduxLogger from 'redux-logger';

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (gDM) => gDM().concat(reduxLogger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()