export interface Room{
    id?: string;
    icon: string;
    name: string;
    type: 'room';
}

export interface Box{
    id?: string;
    icon: string;
    name: string;
    room: string;
    type: 'box';
}

export interface Item {
    id?: string;
    icon: string;
    name: string;
    box: string;
    type: 'item';
}