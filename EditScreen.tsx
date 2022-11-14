import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { IconSelector } from './IconSelector';
import { styles } from './styles';
import { Tab } from './Tab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Room } from './entities';
import { useNavigation } from '@react-navigation/native';
import { selectBoxes, selectRoomById, selectRooms } from './selectors';
import { ComponentCarousel } from './ComponentCarousel';
import { ComponentFromRoomStorage } from './converters';

function typeToName(type: 'room' | 'box' | 'Item'){
    switch(type){
        case 'box':
            return 'Ящик';
        case 'Item':
            return 'Предмет';
        case 'room':
            return 'Комната';
    }
}

export function EditScreen({ route, navigation }) {
    const type = route.params.type ?? 'room';
    const rooms: Room[] = useSelector(selectRooms);
    const boxes: Box[] = useSelector(selectBoxes);
    let current;
    
    switch(type){
        case 'room':
            current = rooms.find(x => x.id === route.params.id);
            break;
        case 'box':
            current = boxes.find(x => x.id === route.params.id);
            break;
    }
    
    const [ name, setName ] = React.useState(current?.name ?? 'Неизвестно');
    const [ icon, setIcon ] = React.useState(current?.icon ?? 'question');
    const [ room, setRoom ] = React.useState<string | undefined>(current?.room ?? undefined);
    
    const dispatch = useDispatch();
    const dispatchType = type === "box" ? "boxes" : type === "item" ? "items" : "rooms";

    const save = async () => {
        console.log("Saving room data.");
        let payload = {
            id: current.id,
            name,
            icon,
            type: route.params.type
        };

        if(route.params.type === "box"){
            payload.room = room ?? rooms[0].id
        }

        console.log("Saving room data.");
        dispatch({
            type: `${dispatchType}/edit`,
            payload 
        });
        console.log("Saved room data.");
        navigation.navigate('Home');
    }


    return <View style={{ flex: 1, marginTop: 10 }}>
        <ScrollView fadingEdgeLength={50}>
            <Text style={styles.header}>Изменение</Text>
            <Tab name="Иконка">
                <IconSelector setIcon={setIcon} icon={icon}/>
            </Tab>
            <Tab name="Название">
                <TextInput style={styles.fieldInputText} onChangeText={setName} value={name} placeholder="Введите название комнаты"/>
            </Tab>
            {route.params.type === 'box' ? <Tab name="Комната">
                <ComponentCarousel components={rooms.map(r => ComponentFromRoomStorage(r, boxes))} mode="Select" onSelect={i => setRoom(rooms[i].id)} defaultValue={room}/>
            </Tab> : null}
        </ScrollView>
        <View>
            <View style={styles.createTextContainer}>
                <Text style={styles.createText}>{typeToName(type)}</Text>
            </View>
            <TouchableOpacity style={styles.createButton} onPress={save}>
                <Text style={styles.createButtonText}>Изменить</Text>
            </TouchableOpacity>
        </View>
    </View>
}