import React, {createContext, useReducer, useEffect} from 'react';
import {SongReducer} from "../reducers/SongReducer";

export const SongListContext = createContext()

const SongListContextProvider = (props) => {
    const [songs, dispatch] = useReducer(SongReducer, [],
        () => {
            const storedSongs = localStorage.getItem('songs')
            return storedSongs ? JSON.parse(storedSongs) : []
        })
    useEffect(() => {
        localStorage.setItem('songs', JSON.stringify(songs))
    }, [songs])
    return(
        <SongListContext.Provider value={{songs, dispatch}}>
            { props.children}
        </SongListContext.Provider>
    )
}
export default SongListContextProvider