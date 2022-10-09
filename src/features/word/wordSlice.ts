import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWord } from '../../utils/wordApi';
import { Word } from '../../types/word';

type State = {
  words: Word[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  words: [],
  loading: false,
  error: ''
};

export const fetchWord = createAsyncThunk<
  Word[],
  string,
  { rejectValue: string }
>('word/fetchWord', (text, { rejectWithValue }) => getWord(text)
  .then((data) => data)
  .catch((error) => rejectWithValue(error.message)));

export const wordSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWord.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchWord.fulfilled, (state, action) => {
      state.words = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchWord.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Default error';
    });
  }
});

export default wordSlice.reducer;
