import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ComponentCard, ComponentCardProps } from './ComponentCard';
import { ComponentCarousel } from './ComponentCarousel';
import { ComponentScroll } from './ComponentScroll';
import { Tab } from './Tab';
import { styles } from './styles';
import { Search } from './Search';
import { Item } from './Item';
import { ItemsList } from './ItemsList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ComponentFromRoomStorage } from './converters';

export function HomeScreen({ navigation }) {
  const [ rooms, setRooms ] = React.useState<ComponentCardProps[]>([]);

  const refreshRooms = async () => {
    const value = JSON.parse(await AsyncStorage.getItem('rooms')) as [];
    setRooms(value.map(v => ComponentFromRoomStorage(v)));
  }

  React.useEffect(() => {
    refreshRooms();
  }, []);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 30, marginTop: 35 }}>
          <Search />
        </View>
        <ScrollView style={{ flex: 1 }} fadingEdgeLength={50}>
          <Tab name="Мои комнаты" buttonText='+ добавить комнату' buttonCallback={() => navigation.navigate('Create')}>
            <ComponentCarousel components={rooms} />
          </Tab>
          <Tab name='Все ящики' buttonText='+ добавить ящик'>
            <ComponentCarousel components={[
              {
                id: '1',
                title: 'Шкаф',
                subtitles: ['14 предметов'],
                thirdtitle: 'Гостиная',
                icon: <MaterialCommunityIcons name="wardrobe" size={70} color="white" style={styles.cardIcon} />
              }
            ]} />
          </Tab>
          <Tab name='Все предметы'>
            <ItemsList items={[
              {
                id: '1',
                name: 'Книга'
              },
              {
                id: '2',
                name: 'Книга'
              },
              {
                id: '3',
                name: 'Книга'
              },
              {
                id: '4',
                name: 'Книга'
              }
            ]} />
          </Tab>
          <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Debug')}>
            <Text style={styles.createButtonText}>Дебаг</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }