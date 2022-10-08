import { configureStore } from '@reduxjs/toolkit';
import wordReducer from '../features/word/wordSlice';

const store = configureStore({
  reducer: {
    word: wordReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
