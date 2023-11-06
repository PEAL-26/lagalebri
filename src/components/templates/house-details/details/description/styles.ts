import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    gap: 12,
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    width: '100%',
    color: '#929292',
    fontSize: 14,
    fontWeight: '400',
  },
});
