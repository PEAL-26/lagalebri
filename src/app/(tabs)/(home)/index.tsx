import { ScrollView } from '@/components/shared/scroll-view';
import {
  HeaderCategories,
  HomeHeader,
  ListHouses,
  SuggestionsButtons,
} from '@/components/templates/home';
import { colors } from '@/styles/colors';
import { RefreshControl, View } from 'react-native';

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
