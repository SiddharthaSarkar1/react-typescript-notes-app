export type Priority = 'high' | 'medium' | 'low';

// export type NoteProps = {
//     id?: number,
//     text: string,
//     priority?: Priority,
// };

export type NoteType = {
    id: string,
    text: string,
    priority: Priority,
};

export enum ColorLight {
    high = '#ffa788',
    medium = '#fdff9e',
    low = '#a1ff9e',
};

export enum ColorDark {
    high = '#d6371b',
    medium = '#7f8d02',
    low = '#14c70d',
};