import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TRiddle } from '../../types/TRiddle';

interface RiddlesState {
  riddles: TRiddle[];
}

const initialState: RiddlesState = {
  riddles: [],
};

const riddlesSlice = createSlice({
  name: 'riddles',
  initialState,
  reducers: {
    setRiddles: (state, action: PayloadAction<TRiddle[]>) => {
      state.riddles = action.payload;
    },
  },
});

export const { setRiddles } = riddlesSlice.actions;
export default riddlesSlice.reducer;
