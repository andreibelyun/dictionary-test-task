import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWord } from '../../utils/wordApi';
import { Word } from '../../types/word';

type State = {
  words: Word[];
  status: string;
  error: string;
};

const initialState: State = {
  words: [],
  status: '',
  error: ''
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.words = action.payload;
    }
  }
  // extraReducers {
  //     [fetchWord.fulfilled]: () => { },
  //     [fetchWord.pending]: () => { },
  //     [fetchWord.rejected]: () => { },
  // }
});

export const { setWord } = wordSlice.actions;

export const fetchWord = createAsyncThunk(
  'word/fetchWord',
  (arg: string, thunkApi) => {
    getWord(arg).then((data) => {
      thunkApi.dispatch(setWord(data));
    });
  }
);

export default wordSlice.reducer;
