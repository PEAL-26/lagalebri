import { colors } from '@/styles/colors';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 4,
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    width: '100%',
    height: '100%',
    fontSize: 12,
    fontWeight: '400',
    ...Platform.select({
      web: {
        outlineColor: 'transparent',
      },
    }),
  },
});
