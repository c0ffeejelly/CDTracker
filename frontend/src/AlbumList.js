import React, { useEffect, useState} from "react";
import axios from "axios";
import AlbumSearch from "./AlbumSearch";

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/albums')
        .then(response => setAlbums(response.data))
        .catch(error => console.error("Error fetching albums: ", error));
    }, []);

    return (
    <div>
        <h2> Albums </h2>
        <div>
        <AlbumSearch/>
        </div>
        <ul>
            {albums.map(album => (
            <li key={album.id}>
            {album.title} by {album.artist}
            </li>
            ))}
        </ul>
    </div>
    )
};

export default AlbumList;