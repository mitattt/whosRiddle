import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { StackNavigationProp } from '@react-navigation/stack';

import { RootState } from '../store';
import { PALETTE } from '../theme/PALETTE';
import { RootStackParamList } from '../types/routeTypes';
import { TRiddle } from '../types/TRiddle';
import { BigRiddle } from './BigRiddle';
import { SmallRiddle } from './SmallRiddle';

export const Riddles: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
}> = ({ navigation }) => {
  const { riddles } = useSelector((state: RootState) => state.riddles);

  const handleOnPress = useCallback((riddle: TRiddle) => {
    navigation.navigate('RiddleScreen', riddle);
  }, []);

  const renderRiddleItem = useCallback(
    ({ item, index }: { item: TRiddle; index: number }) => {
      switch (index) {
        case 0:
          return (
            <View style={styles.firstRiddle}>
              <BigRiddle
                {...item}
                titleStyles={styles.firstRiddleTitle}
                onPress={handleOnPress}
              />
            </View>
          );
        case riddles.length - 1:
          return (
            <BigRiddle
              {...item}
              collection={item.collection}
              onPress={handleOnPress}
            />
          );
        case 1:
          return (
            <View style={styles.smallContainer}>
              <SmallRiddle riddle={item} onPress={handleOnPress} />
              {riddles.length > 1 && (
                <SmallRiddle
                  riddle={riddles[index + 1]}
                  onPress={handleOnPress}
                />
              )}
            </View>
          );
        default:
          return null;
      }
    },
    [riddles],
  );

  return (
    <FlatList
      data={riddles}
      showsVerticalScrollIndicator={false}
      renderItem={renderRiddleItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.riddlesContainer}
      ListEmptyComponent={<Text>No riddles found.</Text>}
    />
  );
};

const styles = StyleSheet.create({
  smallContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 24,
  },
  firstRiddle: {
    marginBottom: 30,
  },
  firstRiddleTitle: {
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'Poppins',
    color: PALETTE.greyRegular,
    marginBottom: 24,
  },
  riddlesContainer: {
    paddingHorizontal: 40,
  },
});
