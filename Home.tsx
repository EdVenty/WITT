import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ComponentCard, ComponentCardProps } from './ComponentCard';
import { ComponentCarousel } from './ComponentCarousel';
import { ComponentScroll } from './ComponentScroll';
import { Tab } from './Tab';
import { styles } from './styles';
import { Search } from './Search';
import { ItemsList } from './ItemsList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ComponentFromBoxStorage, ComponentFromItemStorage, ComponentFromRoomStorage } from './converters';
import { useSelector } from 'react-redux';
import { selectBoxes, selectItems, selectRooms } from './selectors';
import { Box, Room, Item } from './entities';

export function HomeScreen({ navigation }) {
  // const [ rooms, setRooms ] = React.useState<ComponentCardProps[]>([]);

  // const refreshRooms = async () => {
  //   const value = JSON.parse(await AsyncStorage.getItem('rooms')) as [];
  //   setRooms(value.map(v => ComponentFromRoomStorage(v)));
  // }

  const rooms: Room[] = useSelector(selectRooms);
  const boxes: Box[] = useSelector(selectBoxes);
  const items: Item[] = useSelector(selectItems);

  // React.useEffect(() => {
  //   refreshRooms();
  // }, []);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
          <Search />
        </View>
        <ScrollView style={{ flex: 1 }} fadingEdgeLength={50}>
          <Tab name="Мои комнаты" buttonText='+ добавить комнату' buttonCallback={() => navigation.navigate('Create', {type: 'room'})}>
            <ComponentCarousel components={rooms?.map(r => ComponentFromRoomStorage(r, boxes))} />
          </Tab>
          <Tab name='Все ящики' buttonText='+ добавить ящик' buttonCallback={() => navigation.navigate('Create', {type: 'box'})}>
            <ComponentCarousel components={boxes?.map(b => ComponentFromBoxStorage(b, rooms, items))} type='box' />
          </Tab >
          <Tab name='Все предметы'>
            <ItemsList items={items?.slice(0, 5).map(i => ComponentFromItemStorage(i))} onButtonClick={() => navigation.navigate('Create', {type: 'item'})}/>
          </Tab>
          <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Debug')}>
            <Text style={styles.createButtonText}>Дебаг</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }