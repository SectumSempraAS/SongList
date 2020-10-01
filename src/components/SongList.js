import React, {useContext} from 'react'
import {SongListContext} from "../contexts/songListContext";
import SongDetails from "./SongDetails";

const SongList = () => {
    const { songs } = useContext(SongListContext)
    return songs.length ? (
        <div className='song-list'>
            <ul>
                {songs.map( song => {
                    return(
                        <SongDetails key={song.id} song={song}/>
                    )
                })}
            </ul>
        </div>
    ) : <div className='empty'>No songs to listen</div>
}

export default SongList