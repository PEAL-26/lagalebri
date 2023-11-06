import { Text, View } from 'react-native';
import { AuthTitleProps } from './types';
import { styles } from './styles';
import { Button } from '../../button';
import { ArrowLeftIcon } from '@/assets/icons';

export function AuthTitle(props: AuthTitleProps) {
  const { title, description } = props;

  return (
    <View style={styles.container}>
      <Button icon={() => <ArrowLeftIcon />} />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
