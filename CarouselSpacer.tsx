import * as React from 'react';
import { View } from 'react-native';

interface CarouselSpacerProps{
    width?: number;
}

export function CarouselSpacer({
    width
}: CarouselSpacerProps) {
    return <View style={{
        width: width
    }}></View>
}