import React, {useContext} from "react";
import {SongListContext} from "../contexts/songListContext";

const SongDetails = ({song}) => {
    const { removeSong } = useContext(SongListContext)
    return(
        <li onClick={() => removeSong(song.id)}>
            <div className='name'>
                {song.name}
            </div>
            <div className='singer'>
                {song.singer}
            </div>
        </li>
    )
}

export default SongDetails