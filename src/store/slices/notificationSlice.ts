import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TNotification } from '../../types/TNotification';

interface NotificationsState {
  notifications: TNotification[];
}

const initialState: NotificationsState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications: (state, action: PayloadAction<TNotification[]>) => {
      state.notifications = action.payload;
    },
  },
});

export const { setNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
