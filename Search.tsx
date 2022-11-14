import * as React from 'react';
import { View, TextInput, Animated } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Item } from './entities';
import { useSelector } from 'react-redux';
import { selectItems } from './selectors';
import { ComponentFromItemStorage } from './converters';
import { ItemsList } from './ItemsList';

interface SearchProps{

}

export function Search() {
    const [ query, setQuery ] = React.useState("");

    const items: Item[] = useSelector(selectItems);

    return <><View style={styles.search}>
        <AntDesign name={query.length > 0 ? "close" : "search1"} size={36} color="#2E1969" />
        <View style={styles.searchTextContainer}>
            <TextInput style={styles.searchText} placeholder='Искать предмет' value={query} onChangeText={setQuery}/>
        </View>
    </View>
    {query.length > 0 ? <View style={styles.searchResultsContainer}><ItemsList showButton={false} items={items?.filter(i => i.name.toLowerCase().includes(query.toLowerCase())).map(i => ComponentFromItemStorage(i))} /></View> : null}
    
    </>
}