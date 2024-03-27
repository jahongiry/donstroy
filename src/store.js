import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/LanguageSlice';
import studentSlice from './slices/studentSlice';
import courseSlice from './slices/courseSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    student: studentSlice,
    courses: courseSlice,
  },
});
