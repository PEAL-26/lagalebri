import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 16,
  },
  buttonGoogle: {
    borderColor: colors.black,
  },
  separator: {
    width: 48,
    height: 2,
    borderRadius: 2,
    marginVertical: 20,
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
  },
  terms: {
    width: 295,
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
  },
  link: {
    color: colors.primary.DEFAULT,
    fontWeight: '500',
  },
});
