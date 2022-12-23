import './App.css';
import Albums from "./modules/albums/components/Albums";
import Photos from "./modules/photos/components/Photos";
import {useEffect, useState} from "react";
import {getAlbums} from "./modules/albums/components/Services";
import {getAlbumPhotos} from "./modules/photos/components/Services";

function App() {
    const [albumsList, setAlbumsList] = useState([]);
    const [photos, setPhotos] = useState({albumId: undefined, list: []});

    useEffect(() => {
        getAlbums().then((data) => {
            setAlbumsList(data);

            const firstAlbum = data[0];
            getAlbumPhotos(firstAlbum.id).then((data) => setPhotos(({albumId: firstAlbum.id, list: data})));
        });
    }, []);

    return (
        <div className="App">
            <h1 className="title">Gallery</h1>
            <div className="sub-title">
                <span className="s-t-text">Albums</span>
                <span className="s-t-text">Photos</span>
            </div>
            <div className="gallery-container">
                <div className="albums-container">
                    <Albums albums={albumsList} setPhotos={setPhotos} activeAlbumId={photos.albumId}/>
                </div>
                <div className="photos-container">
                    <Photos photos={photos} setPhotos={setPhotos} />
                </div>
            </div>
        </div>
    );
}

export default App;
