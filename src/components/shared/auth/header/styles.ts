import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    width: '100%',
    height: '71%',
    top: 0,
    zIndex: 10,
    
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#D9D9D9',
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  description: {
    width: 272,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',

    marginTop: 12,
  },
});
