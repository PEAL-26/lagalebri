import { RefreshControl, View } from 'react-native';

import {
  HomeHeader,
  ListHouses,
  HeaderCategories,
  SuggestionsButtons,
} from '@/components/templates/home';
import { colors } from '@/styles/colors';
import { ScrollView } from '@/components/shared/scroll-view';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[colors.primary.DEFAULT]}
            refreshing={false}
            onRefresh={() => {}}
          />
        }
        styleView={{ paddingHorizontal: 0, marginBottom: 28 }}
      >
        <HeaderCategories />
        <SuggestionsButtons />
        <ListHouses />
      </ScrollView>
    </View>
  );
}
