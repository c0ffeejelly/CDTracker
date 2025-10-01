import React, { useState, useEffect } from "react";
import axios from "axios";

const AlbumSearch = ({ onSelect }) => {
    const [query, setQuery] = useState("");
    const [results, setResults]= useState([]);

    useEffect(() => {
        if (query.length < 3) return;
        const timeoutId = setTimeout(() => {
            axios
            .get(`http://localhost:8080/api/discogs/search?query=${encodeURIComponent(query)}`)
            .then((res) => {
                const releases = res.data.results.filter(r => r.type === "release");
                setResults(releases);
            });
    }, 400);

    return () => clearTimeout(timeoutId);
   }, [query]);

   const handleSelect = (album) => {
    selectAlbum(album);
    setQuery("");
    setResults([]);
   };

   const selectAlbum = (album) => {
   let albumtitle = album.title.split("-");
   let title = albumtitle[1];
   let artist = albumtitle[0];
   console.log("title: " + title);
   console.log("artist: " + artist);
    axios.post('http://localhost:8080/api/albums', {
    title: title.trim(),
    artist: artist.trim()})
    };

   return(
    <div>
        <input
            value={query}
            placeholder="Search an album"
            onChange={(e) => setQuery(e.target.value)}
        />
        {results.length > 0 && (
            <ul>
                {results.map((r) => (
                    <li key={r.id} onClick={() => handleSelect(r)}>
                    {r.title}
                    </li>
                ))}
            </ul>
        )}
    </div>
   );
};

export default AlbumSearch;