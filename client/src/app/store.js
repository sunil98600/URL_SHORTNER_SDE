import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import linkReducer from '../features/links/linkSLice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    links: linkReducer,
  },
});