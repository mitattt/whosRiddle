import { THint } from './THint';
import { TNotification } from './TNotification';
import { TRiddle } from './TRiddle';

export type TData = {
  riddles: TRiddle[];
  rating: number;
  notifications: TNotification[];
  hints: THint[];
};
