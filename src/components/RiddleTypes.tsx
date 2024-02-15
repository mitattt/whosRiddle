import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { PALETTE } from '../theme/PALETTE';

type TProps = {
  selectedType: string;
  onPress: (type: string) => void;
};

export const RiddleTypes: React.FC<TProps> = ({ selectedType, onPress }) => {
  const existingTypes = ['Weekly', '3 days', '1 day', 'Special'];

  return (
    <FlatList
      contentContainerStyle={styles.typesContainer}
      data={existingTypes}
      horizontal
      renderItem={({ item }) => {
        const isActive = item === selectedType;

        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={[styles.container, isActive && styles.active]}>
              <Text style={[styles.title, isActive && styles.activeTitle]}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: PALETTE.whiteCommon,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    color: PALETTE.greyRegular,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 12,
    fontFamily: 'Poppins',
  },
  active: {
    borderWidth: 1,
    borderColor: PALETTE.greenSoft,
    elevation: 5,
  },
  activeTitle: {
    color: PALETTE.greenDark,
  },
  typesContainer: {
    width: '100%',
    justifyContent: 'space-between',
    padding: 5,
  },
});
