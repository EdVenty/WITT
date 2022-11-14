import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { Vertical } from './Vertical';
import { useNavigation } from '@react-navigation/native';


export interface ItemProps{
    id: string,
    name: string,
    icon?: any
    bigIcon?: any
}

export function Item({
    id,
    name,
    icon = <AntDesign name={'questioncircle'} size={28} color="white" style={styles.itemIcon}/>
}: ItemProps){
    const navigation = useNavigation();

    return <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Item', { id })}>
        <View style={styles.flexRow}>
            {icon}
            <Vertical>
                <Text style={styles.itemText} ellipsizeMode='tail' numberOfLines={1}>{name}</Text>
            </Vertical>
        </View>
        <View style={styles.flexRow}>
            <Vertical>
                <Feather name="more-horizontal" size={30} color="#5e4e8b" style={styles.itemControl}/>
            </Vertical>
            <Vertical>
                <Feather name="move" size={30} color="#5e4e8b" style={styles.itemControl}/>
            </Vertical>
        </View>
    </TouchableOpacity>
}