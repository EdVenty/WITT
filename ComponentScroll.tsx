import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

interface ComponentScrollProps {
    onPress?: () => void
}

export function ComponentScroll ({
    onPress
}: ComponentScrollProps) {
    return <TouchableOpacity style={styles.scrollContainer} onPress={onPress}>
        <View style={styles.scroll}>
            <MaterialIcons name="navigate-next" size={50} color="white" />
        </View>
    </TouchableOpacity>
}