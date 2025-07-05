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
    //onSelect(album);
    setQuery("");
    setResults([]);
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