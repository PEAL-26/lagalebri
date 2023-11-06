import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 288,
    backgroundColor: colors.primary.DEFAULT,
    borderRadius: 16,
  },
  containerDistance: {
    position: 'absolute',
    left: 8,
    top: 8,
    backgroundColor: colors.white,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  textDistance: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlignVertical: 'center',
    gap: 4,
  },
  infoTitle: {
    flex: 1,
    color: colors.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoPrice: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoLocationContainer: {
    flexDirection: 'column',
    gap: 4,
  },
  infoLocation: {
    flex: 1,
    color: colors.black,
    fontSize: 14,
    fontWeight: '300',
  },
  infoRating: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '300',
  },
  infoViews: {
    color: '#929292',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
    flex: 1,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  image: {
    borderRadius: 16,
    width: '100%',
    height: '100%',
    // objectFit: "cover",
    zIndex: -1,
  },
});
