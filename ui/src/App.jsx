import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'

function App() {
  const [searchResults, setSearchResults] = useState([
    // Sample data for testing
    {
      name: 'Song A',
      artist: 'Artist A',
      album: 'Album A',
      id: 1
    },
    {
      name: 'Song B',
      artist: 'Artist B',
      album: 'Album B',
      id: 2
    }
  ]);

  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks(prev => [...prev, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(prev => prev.filter(savedTrack => savedTrack.id !== track.id));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    // Placeholder for Spotify API integration
    console.log('Saving playlist to Spotify...');
  };

  const search = (term) => {
    // Placeholder for Spotify API call
    console.log(`Searching for ${term}`);
    // You would update `searchResults` here with real data
  };

  return (
    <div>
      <h1>Jammming</h1>
      <div className="App">
        <SearchBar onSearch={search} className="search" />
        <SearchResults className="results" searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          className="playlist"
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App
