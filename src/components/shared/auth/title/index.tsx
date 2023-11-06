import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { colors } from '@/styles/colors';
import { ArrowLeftIcon } from '@/assets/icons';

import { styles } from './styles';
import { Button } from '../../button';
import { AuthTitleProps } from './types';

export function AuthTitle(props: AuthTitleProps) {
  const { title, description } = props;

  return (
    <View style={styles.container}>
      <Button
        icon={() => <ArrowLeftIcon color={colors.black} />}
        style={styles.button}
        onPress={() => router.back()}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
