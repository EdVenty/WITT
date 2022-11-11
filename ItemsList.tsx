import * as React from 'react';
import { View } from 'react-native';
import { Item, ItemProps } from './Item';
import { ItemsListSpacer } from './ItemsListSpacer';
import { styles } from './styles';

interface ItemsListProps {
    items: ItemProps[]
}

export function ItemsList({
    items
}: ItemsListProps){
    return <View style={styles.itemsList}>
        {items.map((v, i) => <React.Fragment key={v.id}><Item {...v} />{i < items.length - 1 ? <ItemsListSpacer /> : null}</React.Fragment>)}
    </View>
}