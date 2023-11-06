import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  containerTitle: {
    flexDirection: 'column',
    gap: 4,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    color: colors.black,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
  },
});
