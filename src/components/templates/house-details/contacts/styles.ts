import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 16,
    backgroundColor: colors.white,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userDescription: {
    flexDirection: 'column',
    flex: 1,
  },
  userName: {
    flex: 1,
    color: colors.black,
    fontSize: 14,
    fontWeight: '700',
  },
  infoRating: {
    color: colors.black,
    fontSize: 10,
    fontWeight: '300',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    width: 40,
    height: 40,
    padding: 0,
  },
});
