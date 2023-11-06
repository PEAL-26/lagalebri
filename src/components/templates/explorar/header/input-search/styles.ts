import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 12,
    left: 12,
    bottom: 12,
    width: 18,
    height: 18,
  },
  input: {
    flex: 1,
    paddingLeft: 38,
    paddingRight: 44,
    fontSize: 12,
    fontWeight: '400',
    ...Platform.select({
      web: {
        outlineColor: 'transparent',
      },
    }),
  },
  button: {
    position: 'absolute',
    top: 4,
    right: 4,
    bottom: 4,
    padding: 0,
    width: 32,
    height: 32,
    backgroundColor: '#ffffff',
  },
});
