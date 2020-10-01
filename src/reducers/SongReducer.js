import { v4 as uuid } from 'uuid';

export const SongReducer = (state, action) => {
    switch(action.type){
        case "ADD_SONG" :
            return [...state, {
                name : action.song.name,
                singer : action.song.singer,
                id : uuid(),
            }]
        case "REMOVE_SONG" :
            return state.filter( song => song.id !== action.id);
        default :
            return state
    }
}