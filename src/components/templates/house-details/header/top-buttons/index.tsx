import { View } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/shared/button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeftIcon, SharedIcon, StarIcon } from '@/assets/icons';
import { colors } from '@/styles/colors';

export function TopButtons() {
  const route = useRouter();
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { top: top + 12 }]}>
      <Button
        variant="outline"
        type="circle"
        icon={() => <ArrowLeftIcon color={colors.white} />}
        onPress={route.back}
        style={styles.button}
      />

      <View style={styles.rightContainer}>
        <Button variant="outline" type="circle" icon={() => <SharedIcon />} style={styles.button} />
        <Button
          variant="outline"
          type="circle"
          icon={() => (
            <StarIcon
              stroke={colors.white}
              color={colors.white}
              strokeWidth={1}
              width={24.77}
              height={24}
            />
          )}
          style={styles.button}
        />
      </View>
    </View>
  );
}
