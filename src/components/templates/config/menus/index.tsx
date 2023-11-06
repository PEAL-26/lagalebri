import { Switch, View } from 'react-native';
import { useRouter } from 'expo-router';

import {
  MessageIcon,
  NotificationIcon,
  PhoneIcon,
  SecurityCheckIcon,
  SecurityLockIcon,
} from '@/assets/icons';
import { styles } from './styles';
import { MenusTitle } from './title';
import { MenuItem } from './menu-item';
import { NotificationToggle } from './toggle';

export function ConfigMenus() {
  const isAuthenticated = true;

  const router = useRouter();

  return (
    <View>
      <MenusTitle title="Outras Informações" />
      <View style={styles.menusContainer}>
        {isAuthenticated && (
          <MenuItem title="Notificações" icon={NotificationIcon} toggle={<NotificationToggle />} />
        )}
        <MenuItem
          title="Termos e Condições de Uso"
          icon={SecurityCheckIcon}
          onPress={() => router.push('/termos-servico')}
        />
        <MenuItem
          title="Políticas de Proteção"
          icon={SecurityLockIcon}
          border={false}
          onPress={() => router.push('/politica-privacidade')}
        />
      </View>
      <MenusTitle title="Suporte" />
      <View style={styles.menusContainer}>
        <MenuItem title="FAQ" icon={MessageIcon} onPress={() => router.push('/config/faq')} />
        <MenuItem
          title="Contactar-nos"
          icon={PhoneIcon}
          border={false}
          onPress={() => router.push('/config/contactar-nos')}
        />
      </View>
    </View>
  );
}
