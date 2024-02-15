import React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { SvgUri } from 'react-native-svg';

import { PALETTE } from '../theme/PALETTE';
import { TRiddle } from '../types/TRiddle';

interface IProps extends TRiddle {
  contentContainerStyle?: ViewStyle;
  positionTop?: number;
  positionRight?: number;
  titleStyles?: TextStyle;
  onPress: (riddle: TRiddle) => void;
  collection?: string[];
}

const imageMap: Record<string, ImageSourcePropType> = {
  question: require('../assets/images/question.png'),
  brand: require('../assets/images/brand.png'),
};

export const BigRiddle: React.FC<IProps> = ({
  title,
  subtitle,
  image,
  contentContainerStyle,
  positionRight,
  positionTop,
  titleStyles,
  id,
  type,
  description,
  riddle,
  onPress,
  collection,
}) => {
  const imageSource = imageMap[image];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, contentContainerStyle]}
      onPress={() =>
        onPress({ id, title, type, description, riddle, subtitle, image })
      }>
      <Text style={[styles.title, titleStyles]} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {collection && (
        <FlatList
          horizontal
          data={collection}
          renderItem={({ item }) => (
            <SvgUri width="24" height="24" uri={item} />
          )}
          keyExtractor={item => item}
          contentContainerStyle={styles.collectionContainer}
        />
      )}

      <Image
        alt="image"
        source={imageSource}
        style={[styles.image, { top: positionTop, right: positionRight }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    position: 'relative',
    minWidth: '100%',
    height: 200,
    borderColor: PALETTE.white,
    borderWidth: 2,
    backgroundColor: PALETTE.whiteCommon,
    padding: 24,
  },
  title: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Poppins',
    maxWidth: 120,
    color: PALETTE.greyRegular,
    marginBottom: 12,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    maxWidth: 116,
    marginBottom: 12,
  },
  image: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 320,
    height: 250,
  },
  collectionContainer: {
    gap: 8,
  },
});
