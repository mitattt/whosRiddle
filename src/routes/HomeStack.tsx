import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, RiddleScreen } from '../screens';
import { RootStackParamList } from '../types/routeTypes';

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RiddleScreen" component={RiddleScreen} />
    </Stack.Navigator>
  );
};
