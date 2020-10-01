import React from 'react';
import SongListContextProvider from "./contexts/songListContext";
import NavBar from "./components/Navbar";
import SongList from "./components/SongList";
import NewSongForm from "./components/SongForm";

function App() {
  return (
    <div className="App">
      <SongListContextProvider>
        <NavBar/>
        <SongList/>
        <NewSongForm/>
      </SongListContextProvider>
    </div>
  );
}

export default App;
