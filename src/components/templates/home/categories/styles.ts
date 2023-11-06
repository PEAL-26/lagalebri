import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
  },
  container: {
    padding: 20,
    width: '100%',
    marginTop: 20,
    gap: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonAllCategoriesContainer: {
    backgroundColor: '#EEEEEE',
  },
  buttonAllCategoriesText: {
    fontWeight: '600',
  },
});
