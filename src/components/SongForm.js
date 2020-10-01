import React, { useContext, useState } from 'react';
import {SongListContext} from "../contexts/songListContext";

const NewSongForm = () => {
    const { dispatch } = useContext(SongListContext)
    const [name, setName] = useState('')
    const [singer, setSinger] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_SONG', song : {
            name, singer
            }})
        setName('')
        setSinger('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder='Song Name' type='text' value={name}
                onChange={(e) =>
                    setName(e.target.value)} required/>
            <input placeholder='Singer' type='text' value={singer}
                onChange={(e) =>
                    setSinger(e.target.value)} required/>
            <input type='submit' value='add song'/>

        </form>
    )

}
export default NewSongForm;
