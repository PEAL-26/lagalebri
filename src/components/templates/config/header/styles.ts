import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
  userEmail: {
    flex: 1,
    color: '#929292',
    fontSize: 10,
    fontWeight: '700',
  },
});
