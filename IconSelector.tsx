import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';

interface IconSelectorProps{
    icon?: string,
    icons?: string[]
    setIcon?: (name: string) => void
}

export function IconSelector({
    icon,
    icons = ['question', 'archive', 'book'],
    setIcon
}: IconSelectorProps){
    return <View style={styles.iconSelector}>
        {icons.map(v => <TouchableOpacity key={v} onPress={() => {
            setIcon?.(v);
        }} style={v === icon ? styles.iconSelectorIconSelected : styles.iconSelectorIcon}><FontAwesome5 name={v} size={24} color="#2E1969" /></TouchableOpacity>)}
    </View>
}