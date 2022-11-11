import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

interface SearchProps{

}

export function Search() {
    return <View style={styles.search}>
        <AntDesign name="search1" size={36} color="#2E1969" />
        <View style={styles.searchTextContainer}>
            <Text style={styles.searchText}>Искать предмет</Text>
        </View>
    </View>
}