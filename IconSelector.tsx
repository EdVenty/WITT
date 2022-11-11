import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';

interface IconSelectorProps{
    icons?: string[]
    setIcon?: (name: string) => void
}

export function IconSelector({
    icons = ['question', 'archive', 'book'],
    setIcon
}: IconSelectorProps){
    const [ selected, setSelected ] = React.useState<string>('question');

    return <View style={styles.iconSelector}>
        {icons.map(v => <TouchableOpacity key={v} onPress={() => {
            setSelected(v);
            setIcon?.(v);
        }} style={v === selected ? styles.iconSelectorIconSelected : styles.iconSelectorIcon}><FontAwesome5 name={v} size={24} color="#2E1969" /></TouchableOpacity>)}
    </View>
}