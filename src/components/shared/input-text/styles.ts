import { colors } from '@/styles/colors';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 4,
  },
  inputContainer:{
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(86.06, 86.06, 86.06, 0.08)',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#EBEBEB',
    padding: 4,
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
