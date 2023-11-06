import { Text, View } from 'react-native';
import { styles } from './styles';
import { HeaderUser } from '@/components/shared/user';
import { MailIcon, PhoneIcon, StarIcon } from '@/assets/icons';
import { Button } from '@/components/shared/button';
import { colors } from '@/styles/colors';

export function Contacts() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.user}>
          <HeaderUser />
          <View style={styles.userDescription}>
            <Text style={styles.userName} numberOfLines={1}>
              Pedro Edilásio Araújo Lopes
            </Text>
            <View style={styles.icon}>
              <StarIcon color={colors.black} />
              <Text style={styles.infoRating}>4.8 Avaliação</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            type="circle"
            variant="primary"
            style={styles.button}
            icon={() => <PhoneIcon height={16} color={colors.white} />}
          />
          <Button
            type="circle"
            variant="default"
            icon={() => <MailIcon width={16} />}
            style={[styles.button, { elevation: 0, backgroundColor: 'rgba(4, 64, 94, 0.10)' }]}
          />
        </View>
      </View>
    </View>
  );
}
