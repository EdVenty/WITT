import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Item, ItemProps } from './Item';
import { ItemsListSpacer } from './ItemsListSpacer';
import { styles } from './styles';

interface ItemsListProps {
    items: ItemProps[],
    onButtonClick?: () => any,
    showButton?: boolean
}

export function ItemsList({
    items,
    onButtonClick,
    showButton = true
}: ItemsListProps){
    return <View style={styles.itemsList}>
        {items.map((v, i) => <React.Fragment key={v.id}><Item {...v} />{showButton || (i < items.length - 1) ? <ItemsListSpacer /> : null}</React.Fragment>)}
        {items.length == 0 ? <View style={styles.itemsNoItems}><Text>Предметов не нашлось :(</Text></View> : null}
        {showButton ? 
            <TouchableOpacity style={styles.itemsAddButton} onPress={onButtonClick}>
                <Text style={styles.itemsAddButtonText}>+ добавить предмет</Text>
            </TouchableOpacity>
        : null}
    </View>
}