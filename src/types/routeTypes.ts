import { StackScreenProps } from '@react-navigation/stack';

import { TRiddle } from './TRiddle';

export type RootStackParamList = {
  HomeScreen: undefined;
  RiddleScreen: TRiddle;
};

export type RootStackScreenProps<ROUTE_NAME extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, ROUTE_NAME>;

export type AppTabParamList = {
  HOME: undefined;
  LEADERBOARD: undefined;
  SETTINGS: undefined;
};
