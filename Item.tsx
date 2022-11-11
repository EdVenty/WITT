import * as React from 'react';
import { View, Text } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { Vertical } from './Vertical';


export interface ItemProps{
    id: string,
    name: string,
    icon?: any
}

export function Item({
    id,
    name,
    icon = <AntDesign name={'questioncircle'} size={28} color="white" style={styles.itemIcon}/>
}: ItemProps){
    return <View style={styles.item}>
        <View style={styles.flexRow}>
            {icon}
            <Vertical>
                <Text style={styles.itemText}>{name}</Text>
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
    </View>
}