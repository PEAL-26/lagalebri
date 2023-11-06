import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 52,
    right: 52,
    top: 0,
    bottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textLocation: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    color: '#929292',
  },
  addressText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    color: colors.black,
    marginLeft: 4,
    marginRight: 12,
    width: 128,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
