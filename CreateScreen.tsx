import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { IconSelector } from './IconSelector';
import { styles } from './styles';
import { Tab } from './Tab';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function CreateScreen({ navigation }) {
    const [ name, setName ] = React.useState("");
    const [ icon, setIcon ] = React.useState("question");

    const save = async () => {
        console.log("Saving room data.");
        const id = Number(await AsyncStorage.getItem("lastRoomsId") ?? 0) + 1;
        console.log(`New id: ${id}.`)
        const rooms = JSON.parse(await AsyncStorage.getItem("rooms"));
        await AsyncStorage.setItem("rooms", JSON.stringify([...(rooms ?? []), {id, name, icon}]));
        await AsyncStorage.setItem("lastRoomsId", id.toString());
        console.log("Saved room data.");
    }

    const clear = async () => {
        console.log("Clearing room data.");
        const rooms = JSON.parse(await AsyncStorage.getItem("rooms"));
        console.log(rooms);
        await AsyncStorage.setItem("rooms", JSON.stringify(null));
        console.log("Cleared room data.");
    }

    const clearId = async () => {
        console.log("Clearing room id data.");
        const id = Number(await AsyncStorage.getItem("lastRoomsId") ?? 0);
        console.log(id);
         await AsyncStorage.setItem("lastRoomsId", (0).toString());
        console.log("Cleared room id data.");
    }


    return <View style={{ flex: 1, marginTop: 30 }}>
        <ScrollView fadingEdgeLength={50}>
            <Text style={styles.header}>Создание</Text>
            <Tab name="Иконка">
                <IconSelector setIcon={setIcon}/>
            </Tab>
            <Tab name="Название">
                <TextInput style={styles.fieldInputText} onChangeText={setName} placeholder="Введите название комнаты"/>
            </Tab>
        </ScrollView>
        <View>
            <View style={styles.createTextContainer}>
                <Text style={styles.createText}>Комната</Text>
            </View>
            <TouchableOpacity style={styles.createButton} onPress={clear}>
                <Text style={styles.createButtonText}>Очистить хранилище</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createButton} onPress={clearId}>
                <Text style={styles.createButtonText}>Очистить айдишники</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createButton} onPress={save}>
                <Text style={styles.createButtonText}>Создать</Text>
            </TouchableOpacity>
        </View>
    </View>
}