import * as React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface VerticalProps{
    children: React.ReactNode | React.ReactNode[] | null | undefined
}

export function Vertical({
    children
}: VerticalProps){
    return <View style={styles.vertical}>{children}</View>
}