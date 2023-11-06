import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {
  HouseDetails,
  HouseDetailsHeader,
  ImageCarousel,
  Contacts,
} from '@/components/templates/house-details';
import { ScrollView } from '@/components/shared/scroll-view';

export default function ExplorarDetalhesScreen() {
  const { id } = useLocalSearchParams();

  console.log(id);
  return (
    <View style={{ flex: 1 }}>
      <HouseDetailsHeader />
      <ScrollView styleView={{ paddingHorizontal: 0, marginBottom: 96 }}>
        <ImageCarousel />
        <HouseDetails />
      </ScrollView>
      <Contacts />
    </View>
  );
}
