import { ComponentCardProps } from "./ComponentCard"
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";
import { Box, Item, Room } from "./entities";
import { ItemProps } from "./Item";

export function ComponentFromRoomStorage(data: Room, boxes: Box[]): ComponentCardProps{
    return {
        id: data.id,
        title: data.name,
        icon: <FontAwesome5 name={data.icon} size={70} color="white" style={styles.cardIcon} />,
        subtitles: [
            `${boxes.filter(x => x.room === data.id).length} ящиков`
        ]
    }
}

export function ComponentFromBoxStorage(data: Box, rooms: Room[], items: Item[]): ComponentCardProps{
    return {
        id: data.id,
        title: data.name,
        icon: <FontAwesome5 name={data.icon} size={70} color="white" style={styles.cardIcon} />,
        subtitles: [
            `${items.filter(x => x.box === data.id).length} предметов`
        ],
        thirdtitle: (rooms.find(x => x.id === data.room) ?? {name: "Неизвестная"}).name
    }
}

export function ComponentFromItemStorage(data: Item): ItemProps{
    return {
        id: data.id,
        name: data.name,
        icon: <FontAwesome5 name={data.icon} size={28} color="white" style={styles.itemIcon} />,
        bigIcon: <FontAwesome5 name={data.icon} size={70} color="white" style={styles.bigIcon} />,
    }
}