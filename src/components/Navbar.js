import React, {useContext} from 'react';
import {SongListContext} from "../contexts/songListContext";

const NavBar = () => {
    const { songs } = useContext(SongListContext)
    return(
        <div className='navbar'>
            <h1>Anshuman's Song List</h1>
            <p>Currently there are {songs.length} songs....</p>
        </div>
    )
}

export default NavBar