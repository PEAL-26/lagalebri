import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    height: 104,
    backgroundColor: colors.white,
    borderRadius: 16,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: colors.primary.DEFAULT,
  },
  containerInfo: {
    flex: 1,
  },
  groupBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    verticalAlign: 'center',
    gap: 4,
  },
  infoTitle: {
    flex: 1,
    color: colors.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoPrice: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'bold',
  },

  infoLocationContainer: {
    flex: 1,
    marginTop: 18,
    flexDirection: 'column',
    gap: 4,
  },
  infoLocation: {
    flex: 1,
    color: colors.black,
    fontSize: 10,
    fontWeight: '300',
  },
  infoDistance: {
    color: colors.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoRating: {
    color: colors.black,
    fontSize: 10,
    fontWeight: '300',
  },
  infoViews: {
    color: '#929292',
    fontSize: 10,
    fontWeight: '500',
    marginLeft: 4,
    flex: 1,
  },
  iconDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
