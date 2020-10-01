import React, {useContext} from "react";
import {SongListContext} from "../contexts/songListContext";

const SongDetails = ({song}) => {
    const { dispatch } = useContext(SongListContext)
    return(
        <li onClick={() => dispatch({ type: 'REMOVE_SONG', id: song.id })}>
            <div className='name'>{song.name}</div>
            <div className='singer'>{song.singer}</div>
        </li>
    )
}

export default SongDetails