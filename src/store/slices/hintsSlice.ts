import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { THint } from '../../types/THint';

interface HintsState {
  hints: THint[];
}

const initialState: HintsState = {
  hints: [],
};

const HintsSlice = createSlice({
  name: 'hints',
  initialState,
  reducers: {
    setHints: (state, action: PayloadAction<THint[]>) => {
      state.hints = action.payload;
    },
  },
});

export const { setHints } = HintsSlice.actions;
export default HintsSlice.reducer;
