import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { PALETTE } from '../theme/PALETTE';

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.generalWrapper}>
      <LinearGradient
        colors={[PALETTE.whiteCommon, PALETTE.whitePinkish]}
        style={styles.gradient}>
        <Text style={styles.text}>There are nothing here yet</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 42,
    paddingBottom: 166,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generalWrapper: {
    flex: 1,
  },
  text: {
    color: PALETTE.greyRegular,
    fontSize: 18,
  },
});
