import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TRating } from '../../types/TRating';

interface RatingState {
  rating: TRating;
}

const initialState: RatingState = {
  rating: {
    rating: 0,
  },
};

const RatingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<TRating>) => {
      state.rating = action.payload;
    },
  },
});

export const { setRating } = RatingSlice.actions;
export default RatingSlice.reducer;
