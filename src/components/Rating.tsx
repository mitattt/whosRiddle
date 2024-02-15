import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { PALETTE } from '../theme/PALETTE';
import { Star } from './svg';

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={[PALETTE.orangeSoft, PALETTE.orangeStrong]}
        angle={45}
        useAngle={true}
        style={styles.gradient}>
        <View style={styles.container}>
          <Star />
          <Text style={styles.title}>{rating}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 8,
  },
  gradient: {
    width: 70,
    borderRadius: 14,
  },
  title: {
    color: PALETTE.white,
    fontSize: 11,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
});
