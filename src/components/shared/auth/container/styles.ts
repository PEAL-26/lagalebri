import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    width: '100%',
    height: '34%',
    bottom: 0,
    zIndex: 11,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 28,
    paddingTop: 8,
  },
  scrollView: {
    marginTop: 16,
  },
});
