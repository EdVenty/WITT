import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { IconSelector } from './IconSelector';
import { styles } from './styles';
import { Tab } from './Tab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

export function DebugScreen({ navigation }) {
    const dispatch = useDispatch();

    return <View style={{ flex: 1, marginTop: 60 }}>
        <View>
            <View style={styles.createTextContainer}>
                <Text style={styles.createText}>Дебаг</Text>
            </View>
            <TouchableOpacity style={styles.createButton} onPress={() => dispatch({type: 'rooms/clear'})}>
                <Text style={styles.createButtonText}>Очистить комнаты</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createButton} onPress={() => dispatch({type: 'boxes/clear'})}>
                <Text style={styles.createButtonText}>Очистить ящики</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createButton} onPress={() => dispatch({type: 'items/clear'})}>
                <Text style={styles.createButtonText}>Очистить предметы</Text>
            </TouchableOpacity>
        </View>
    </View>
}