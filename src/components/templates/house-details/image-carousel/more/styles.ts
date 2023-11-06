import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    textAlign: 'center',
    color: colors.black,
    fontSize: 14,
    fontWeight: '700',
  },
});
