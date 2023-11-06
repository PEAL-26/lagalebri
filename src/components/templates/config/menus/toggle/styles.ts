import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    width: 48,
    height: 28,
    // padding: 4,
    borderWidth: 2,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  switch: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 12,
    left: 0,
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
  },
});
