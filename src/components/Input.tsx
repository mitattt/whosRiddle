import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { PALETTE } from '../theme/PALETTE';

interface InputProps extends TextInputProps {}

const withInputStyles = (WrappedComponent: React.ComponentType<any>) => {
  const Input: React.FC<InputProps> = props => {
    const { style, ...otherProps } = props;
    return (
      <LinearGradient
        colors={[PALETTE.white, PALETTE.whitePinkish]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}>
        <WrappedComponent
          {...otherProps}
          style={[styles.input, style]}
          placeholderTextColor={PALETTE.greyLight}
        />
      </LinearGradient>
    );
  };

  return Input;
};

const Input = withInputStyles(TextInput);

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 26,
    padding: 2,
  },
  input: {
    flex: 1,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: PALETTE.white,
    paddingHorizontal: 26,
    paddingVertical: 24,
    color: PALETTE.greyLight,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 13,
  },
});

export default Input;
