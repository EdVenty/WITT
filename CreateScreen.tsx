import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { IconSelector } from './IconSelector';
import { styles } from './styles';
import { Tab } from './Tab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Item, Room } from './entities';
import { ComponentCarousel } from './ComponentCarousel';
import { selectBoxes, selectItems, selectRooms } from './selectors';
import { ComponentFromBoxStorage, ComponentFromRoomStorage } from './converters';

function typeToName(type: 'room' | 'box' | 'item'){
    switch(type){
        case 'box':
            return 'Ящик';
        case 'item':
            return 'Предмет';
        case 'room':
            return 'Комната';
    }
}

export function CreateScreen({ route, navigation }) {
    const [ name, setName ] = React.useState("");
    const [ icon, setIcon ] = React.useState("question");
    const [ room, setRoom ] = React.useState<string | undefined>(undefined);
    const [ box, setBox ] = React.useState<string | undefined>(undefined);

    const rooms: Room[] = useSelector(selectRooms);
    const boxes: Box[] = useSelector(selectBoxes);
    const items: Item[] = useSelector(selectItems);

    React.useEffect(() => {
        if(rooms && boxes && !box){ 
            console.log
            if(boxes[0].id){
                setBox(boxes[0].id);
                const r = rooms.find(x => x.id === boxes[0].room);
                if(r)
                    setRoom(r.id);
            }
        }
    }, [rooms, boxes]);

    const dispatch = useDispatch();
    

    const dispatchType = route.params.type === "box" ? "boxes" : route.params.type === "item" ? "items" : "rooms";

    const save = async () => {
        let payload = {
            name,
            icon,
            type: route.params.type
        };

        if(route.params.type === "box"){
            payload.room = room ?? rooms[0].id;
        }
        if(route.params.type === "item"){
            payload.box = box ?? boxes[0].id
        }

        console.log("Saving room data.");
        dispatch({
            type: `${dispatchType}/create`,
            payload 
        });
        // const id = Number(await AsyncStorage.getItem("lastRoomsId") ?? 0) + 1;
        // console.log(`New id: ${id}.`)
        // const rooms = JSON.parse(await AsyncStorage.getItem("rooms"));
        // await AsyncStorage.setItem("rooms", JSON.stringify([...(rooms ?? []), {id, name, icon}]));
        // await AsyncStorage.setItem("lastRoomsId", id.toString());
        console.log("Saved room data.");
        navigation.navigate('Home');
    }

    const clear = async () => {
        console.log("Clearing room data.");
        // const rooms = JSON.parse(await AsyncStorage.getItem("rooms"));
        // console.log(rooms);
        // await AsyncStorage.setItem("rooms", JSON.stringify(null));
        console.log("Cleared room data.");
    }

    const clearId = async () => {
        console.log("Clearing room id data.");
        // const id = Number(await AsyncStorage.getItem("lastRoomsId") ?? 0);
        // console.log(id);
        //  await AsyncStorage.setItem("lastRoomsId", (0).toString());
        console.log("Cleared room id data.");
    }


    return <View style={{ flex: 1, marginTop: 10 }}>
        <ScrollView fadingEdgeLength={50}>
            <Text style={styles.header}>Создание</Text>
            <Tab name="Иконка">
                <IconSelector setIcon={setIcon} icon={icon}/>
            </Tab>
            <Tab name="Название">
                <TextInput style={styles.fieldInputText} onChangeText={setName} value={name} placeholder="Введите название"/>
            </Tab>
            {route.params.type !== 'room' && rooms ? <Tab name="Комната">
                <ComponentCarousel components={rooms.map(r => ComponentFromRoomStorage(r, boxes))} mode="Select" onSelect={i => {
                    setRoom(rooms?.[i].id);
                    console.log(rooms?.[i].id);
                    }}/>
            </Tab> : null}
            {route.params.type === 'item' && boxes ? <Tab name="Ящик">
                <ComponentCarousel components={boxes.filter(x => x.room === room).map(b => ComponentFromBoxStorage(b, rooms, items))} mode="Select" onSelect={i => setBox(boxes[i].id)}/>
            </Tab> : null}
        </ScrollView>
        <View>
            <View style={styles.createTextContainer}>
                <Text style={styles.createText}>{typeToName(route.params.type)}</Text>
            </View>
            <TouchableOpacity style={styles.createButton} onPress={save}>
                <Text style={styles.createButtonText}>Создать</Text>
            </TouchableOpacity>
        </View>
    </View>
}