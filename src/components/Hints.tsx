import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { PALETTE } from '../theme/PALETTE';
import { Hint } from './svg';

export const Hints = ({ hintsCount }: { hintsCount: number }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Hint />
      {hintsCount > 0 && (
        <LinearGradient
          useAngle={true}
          angle={45}
          colors={[PALETTE.greenSoft, PALETTE.greenStrong]}
          style={styles.gradient}>
          <Text style={styles.title}>{hintsCount}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 12,
    backgroundColor: PALETTE.whiteCommon,
    borderRadius: 14,
  },
  gradient: {
    position: 'absolute',
    right: -6,
    top: -7,
    width: 22,
    height: 22,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: PALETTE.white,
    fontSize: 11,
    lineHeight: 11,
    fontWeight: '600',
  },
});
