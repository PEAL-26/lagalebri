import { StyleSheet } from 'react-native';
import { GetStylesProps } from './types';
import { colors } from '@/styles/colors';

export const getStyles = (props: GetStylesProps) => {
  const { align = 'center', type = 'none', variant = 'none' } = props;

  return StyleSheet.create({
    button: {
      ...variants[variant].button,
      ...types[type],
      ...alignments[align].button,
    },
    text: {
      ...variants[variant].text,
      ...alignments[align].text,
    },
  });
};

const variants = {
  primary: StyleSheet.create({
    button: {
      backgroundColor: colors.primary.DEFAULT,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      elevation: 4,
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    text: {
      color: colors.white,
      fontSize: 14,
      fontWeight: '400',
    },
  }),
  default: StyleSheet.create({
    button: {
      backgroundColor: colors.white,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      elevation: 4,
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    text: {
      color: colors.black,
      fontSize: 14,
      fontWeight: '400',
    },
  }),
  outline: StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      padding: 16,
      borderColor: colors.white,
      borderWidth: 1,
    },
    text: {},
  }),
  none: StyleSheet.create({
    button: {},
    text: {},
  }),
};

const alignments = {
  center: StyleSheet.create({
    button: {
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
    },
  }),
  left: StyleSheet.create({
    button: {
      justifyContent: 'flex-start',
    },
    text: {
      textAlign: 'left',
    },
  }),
  right: StyleSheet.create({
    button: {
      justifyContent: 'flex-end',
    },
    text: {
      textAlign: 'right',
    },
  }),
};

const types = StyleSheet.create({
  circle: {
    borderRadius: 1000,
  },
  square: {
    borderRadius: 4,
  },
  none: {},
});
