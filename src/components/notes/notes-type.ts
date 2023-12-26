export type NoteProps = {
    id?: number,
    text: string,
    priority?: 'high' | 'medium' | 'low',
};


export type NoteType = {
    id: string,
    text: string,
    priority: 'high' | 'medium' | 'low',
};