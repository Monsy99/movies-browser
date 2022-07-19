import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/types';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'en-US',
  },
  reducers: {
    setLanguage: (state, { payload: language }) => {
      state.language = language;
    },
  },
});

const selectLanguageState = (state: RootState) => state.language;
export const selectLanguage = (state: RootState) => selectLanguageState(state).language;

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
