import { configureStore } from '@reduxjs/toolkit';

import hintsSlice from './slices/hintsSlice';
import notificationSlice from './slices/notificationSlice';
import ratingSlice from './slices/ratingSlice';
import riddleSlice from './slices/riddleSlice';

export const store = configureStore({
  reducer: {
    riddles: riddleSlice,
    notifications: notificationSlice,
    hints: hintsSlice,
    rating: ratingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
