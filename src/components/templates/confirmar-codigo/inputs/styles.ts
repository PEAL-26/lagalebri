import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 6,
    marginTop: 32,
  },
  inputContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(86.06, 86.06, 86.06, 0.08)',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#EBEBEB',
    padding: 4,
  },
  input: {
    flex: 1,
    paddingLeft: 58,
    paddingRight: 12,
    width: '100%',
    height: '100%',
    fontSize: 12,
    fontWeight: '400',
    outlineColor: 'transparent',
  },
});
