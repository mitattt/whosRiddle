import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { AppHeader, Riddles } from '../components';
import { useGetAllData } from '../hooks/useGetAllData';
import { PALETTE } from '../theme/PALETTE';
import { RootStackScreenProps } from '../types/routeTypes';

export const HomeScreen: React.FC<RootStackScreenProps<'HomeScreen'>> = ({
  navigation,
}) => {
  useGetAllData();

  return (
    <SafeAreaView style={styles.generalWrapper}>
      <LinearGradient
        colors={[PALETTE.whiteCommon, PALETTE.whitePinkish]}
        style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <AppHeader />
          </View>
          <Riddles navigation={navigation} />
        </View>
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
  },
  generalWrapper: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 40,
  },
});
