import React, {createContext, useState} from 'react';
import { v4 as uuid } from 'uuid';

export const SongListContext = createContext()

const SongListContextProvider = (props) => {
    const [songs, setSongs] = useState([{name : 'The Less I know the better', singer: 'Tame Impala', id: 1},
        {name : 'Dil se re', singer: 'A.R. Rahman', id: 2},
        {name : 'Something in the way', singer: 'Nirvana', id: 3},])

    const addSong = (name, singer) => {
        setSongs([...songs, {name, singer, id : uuid()}])
    }

    const removeSong = (id) => {
        setSongs(songs.filter( song => song.id != id))
    }

    return(
        <SongListContext.Provider
            value={{songs, addSong, removeSong}}>
            { props.children}
        </SongListContext.Provider>
    )
}

export default SongListContextProvider