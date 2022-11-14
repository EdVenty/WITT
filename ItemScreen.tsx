import * as React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ComponentCard } from './ComponentCard';
import { ComponentFromBoxStorage, ComponentFromItemStorage, ComponentFromRoomStorage } from './converters';
import { Box, Item, Room } from './entities';
import { selectBoxes, selectItems, selectRooms } from './selectors';
import { styles } from './styles';
import { Tab } from './Tab';

export function ItemScreen({ route, navigation }) {
    const dispatch = useDispatch();
    
    const items: Item[] = useSelector(selectItems);
    const boxes: Box[] = useSelector(selectBoxes);
    const rooms: Room[] = useSelector(selectRooms);

    const item = items.find(x => x.id === route.params.id) || { id: '0', icon: 'questioncircle', name: 'Неизвестный', box: '0', type: 'item' };
    const itemProps = ComponentFromItemStorage(item);

    const box = boxes.find(x => x.id === item.box) || { id: '0', icon: 'questioncircle', name: 'Неизвестный', room: '0', type: 'box' };
    const boxProps = ComponentFromBoxStorage(box, rooms, items);

    const room = rooms.find(x => x.id === box.room) || { id: '0', icon: 'questioncircle', name: 'Неизвестный', type: 'room' };
    const roomProps = ComponentFromRoomStorage(room, boxes);

    const deleteItem = () => {
        console.log(`delete ${item.id}`);
        dispatch({
            type: 'items/delete',
            payload: {
                id: item.id
            }
        });
        navigation.navigate('Home');
    }

    return <ScrollView fadingEdgeLength={50}>
        <Text style={styles.header}>Предмет</Text>
        <View style={styles.itemScreenView}>
            <View style={styles.itemScreenTopContainer}>
                <View style={styles.bigIconContainer}>{itemProps.bigIcon}</View>
                <View style={styles.itemScreenTextContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text>{box.name}</Text>
                </View>
            </View>
            <Tab name='Находится в ящике'>
                <ComponentCard {...boxProps} />
            </Tab>
            <Tab name='Находится в комнате'>
                <ComponentCard {...roomProps} />
            </Tab>
            <TouchableOpacity style={styles.itemScreenDeleteButtonContainer} onPress={deleteItem}>
                <Text style={styles.itemScreenDeleteButtonText}>Удалить</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}