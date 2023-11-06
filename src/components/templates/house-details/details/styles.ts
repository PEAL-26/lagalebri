import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 28,
  },
  containerInfo: {
    position: 'absolute',
    left: 8,
    right: 8,
    bottom: 8,
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    opacity: 0.8,
    flexDirection: 'column',
    gap: 20,
  },
  infoTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    textAlignVertical: 'center',
    gap: 16,
  },
  infoTitle: {
    flex: 1,
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoPrice: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoLocationRatingContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    marginTop: 20,
  },
  infoLocationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    textAlignVertical: 'center',
    gap: 16,
  },
  infoLocationText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '300',
    maxWidth: 190
  },
  infoRating: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '300',
  },
  infoViews: {
    color: '#929292',
    fontSize: 14,
    marginLeft: 4,
    flex: 1,
  },
  iconDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
