import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { PALETTE } from '../theme/PALETTE';

interface ButtonProps {
  titleStyle?: StyleProp<TextStyle>;
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const withButtonStyles = (
  WrappedComponent: React.ComponentType<ButtonProps>,
) => {
  const WithButtonStyles: React.FC<ButtonProps> = ({
    titleStyle,
    title,
    onPress,
  }) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}>
      <LinearGradient
        colors={[PALETTE.greenLight, PALETTE.greenDark]}
        useAngle={true}
        angle={135}
        style={styles.linearGradient}>
        <WrappedComponent
          titleStyle={titleStyle}
          title={title}
          onPress={onPress}
        />
      </LinearGradient>
    </TouchableOpacity>
  );

  return WithButtonStyles;
};

const Button: React.FC<ButtonProps> = ({ titleStyle, title }) => {
  return <Text style={[styles.title, titleStyle]}>{title}</Text>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 26,
    overflow: 'hidden',
    shadowColor: PALETTE.greenLight,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 5,
  },
  linearGradient: {
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 14,
    color: PALETTE.white,
    textAlign: 'center',
  },
});

export default withButtonStyles(Button);
