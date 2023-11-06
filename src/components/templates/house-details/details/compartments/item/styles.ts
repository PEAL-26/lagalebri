import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 72,
    backgroundColor: 'white',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 12,
  },
  icon: {},
  title: {
    textAlign: 'center',
    color: colors.black,
    fontSize: 10,
    fontWeight: '400',
  },
});
