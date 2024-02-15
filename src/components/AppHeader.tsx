import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useGetAllData } from '../hooks/useGetAllData';
import { Hints, Notifications, Rating } from './';

export const AppHeader = () => {
  const { rating, hints, notifications } = useGetAllData();
  return (
    <View style={styles.container}>
      <Rating rating={rating.rating} />
      <View style={styles.controlContainer}>
        <Notifications notificationsCount={notifications.length} />
        <Hints hintsCount={hints.length} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 38,
  },
  controlContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});
