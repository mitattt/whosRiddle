import React, { useCallback, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import { AppHeader, RiddleTypes } from '../components';
import Input from '../components/Input';
import { RootState } from '../store';
import { PALETTE } from '../theme/PALETTE';
import { RootStackScreenProps } from '../types/routeTypes';
import { TRiddle } from '../types/TRiddle';
import Button from '../components/Button';

export const RiddleScreen: React.FC<RootStackScreenProps<'RiddleScreen'>> = ({
  route,
}) => {
  const item = route.params;
  const [riddle, setRiddle] = useState<TRiddle>(item);
  const { riddles } = useSelector((state: RootState) => state.riddles);
  const [attempts, setAttempts] = useState<number>(5);
  const [isError, setIsError] = useState(false);

  const handleTypeSelect = useCallback((type: string) => {
    const newRiddle = riddles.filter(r => r.type === type);
    setRiddle(newRiddle[0]);
    setAttempts(5);
    setIsError(false);
  }, []);

  const handleButtonPress = useCallback(() => {
    attempts > 1 ? setAttempts(prev => prev - 1) : setIsError(true);
  }, [attempts]);

  return (
    <SafeAreaView style={styles.generalWrapper}>
      <LinearGradient
        colors={[PALETTE.whiteCommon, PALETTE.whitePinkish]}
        style={styles.gradient}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.container}>
            <AppHeader />
            <RiddleTypes
              selectedType={riddle.type}
              onPress={handleTypeSelect}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{riddle.title}</Text>
              <Text style={styles.description}>{riddle.description}</Text>
              <Text style={styles.riddleTitle}>{riddle.riddle}</Text>
            </View>
            <View style={styles.inputContainer}>
              <Input placeholder="Your answer" />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Submit" onPress={handleButtonPress} />
            </View>
            {isError ? (
              <Text style={styles.errorMessage}>
                You have spent all the attempts for today
              </Text>
            ) : (
              <Text style={styles.attempts}>{attempts} attempts remaining</Text>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 42,
  },
  gradient: {
    flex: 1,
  },
  generalWrapper: {
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 30,
    color: PALETTE.greyRegular,
    marginBottom: 18,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '400',
    color: PALETTE.greyLight,
    marginBottom: 30,
  },
  riddleTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 28,
    color: PALETTE.greyLight,
    fontWeight: '700',
  },
  textContainer: {
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 24,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  attempts: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: PALETTE.greyLight,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
  contentContainerStyle: {
    paddingBottom: 60,
  },
});
