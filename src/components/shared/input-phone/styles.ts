import { colors } from '@/styles/colors';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(86.06, 86.06, 86.06, 0.08)',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#EBEBEB',
    padding: 4,
  },
  label: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 4,
  },
  icon: {
    position: 'absolute',
    top: 12,
    left: 12,
    bottom: 16,
    width: 20,
    height: 26,
  },
  separator: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 46,
    borderRightWidth: 1,
    borderRightColor: '#EBEBEB',
  },
  input: {
    flex: 1,
    paddingLeft: 58,
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
