import { ComponentCardProps } from "./ComponentCard"
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";

export function ComponentFromRoomStorage(data: any): ComponentCardProps{
    return {
        id: data.id,
        title: data.name,
        icon: <FontAwesome5 name={data.icon} size={70} color="white" style={styles.cardIcon} />,
        subtitles: []
    }
}