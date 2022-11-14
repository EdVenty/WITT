import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface TabProps{
    name: string;
    buttonText?: string;
    buttonCallback?: () => void,
    children: React.ReactNode | React.ReactNode[];
}

export function Tab({
    name, buttonText, children, buttonCallback
}: TabProps) {
    return <View style={styles.tab}>
        <Text style={styles.tabText}>{name}</Text>
        {children}
        {buttonText ? <TouchableOpacity style={styles.addButton} onPress={buttonCallback}>
            <Text style={styles.addButtonText}>{buttonText}</Text>
        </TouchableOpacity> : null}
    </View>
}