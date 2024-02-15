import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllHints,
  getAllNotifications,
  getAllRiddles,
  getRating,
} from '../api/fetchClient';
import { AppDispatch, RootState } from '../store';
import { setRiddles } from '../store/slices';
import { setHints } from '../store/slices/hintsSlice';
import { setNotifications } from '../store/slices/notificationSlice';
import { setRating } from '../store/slices/ratingSlice';

export const useGetAllData = () => {
  const dispatch: AppDispatch = useDispatch();
  const { riddles } = useSelector((state: RootState) => state.riddles);
  const { notifications } = useSelector(
    (state: RootState) => state.notifications,
  );
  const { hints } = useSelector((state: RootState) => state.hints);
  const { rating } = useSelector((state: RootState) => state.rating);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          responseRiddles,
          responseNotifications,
          responseHints,
          responseRating,
        ] = await Promise.all([
          getAllRiddles(),
          getAllNotifications(),
          getAllHints(),
          getRating(),
        ]);

        dispatch(setHints(responseHints));
        dispatch(setRating(responseRating));
        dispatch(setRiddles(responseRiddles));
        dispatch(setNotifications(responseNotifications));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return {
    riddles,
    hints,
    notifications,
    rating,
  };
};
