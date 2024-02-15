import React from 'react';
import {
  ImageSourcePropType,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { PALETTE } from '../theme/PALETTE';
import { TRiddle } from '../types/TRiddle';

interface IProps {
  onPress: (riddle: TRiddle) => void;
  riddle: TRiddle;
}

const imageMap: Record<string, ImageSourcePropType> = {
  '1': require('../assets/images/1.png'),
  '3': require('../assets/images/3.png'),
};

export const SmallRiddle: React.FC<IProps> = ({ riddle, onPress }) => {
  const { title, subtitle, image } = riddle;
  const imageSource = imageMap[image];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => onPress(riddle)}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Image alt="image" source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderColor: PALETTE.white,
    borderWidth: 2,
    borderRadius: 24,
    paddingLeft: 20,
    paddingRight: 38,
    paddingBottom: 22,
    backgroundColor: PALETTE.whiteCommon,
  },
  title: {
    marginTop: 56,
    marginBottom: 14,
    maxWidth: 88,
    color: PALETTE.greyRegular,
    fontWeight: '800',
    fontSize: 14,
    fontFamily: 'Poppins',
    lineHeight: 20,
  },
  subtitle: {
    color: PALETTE.greyLight,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    maxWidth: 74,
  },
  image: {
    top: -26,
    right: -37,
    position: 'absolute',
    resizeMode: 'contain',
    width: 180,
    height: 170,
  },
});
