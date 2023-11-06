import { colors } from '@/styles/colors';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  containerInputs:{
    gap: 16
  },
  buttonGoogle: {
    borderColor: colors.black,
  },
});
