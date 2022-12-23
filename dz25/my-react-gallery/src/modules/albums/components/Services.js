import React from "react";


const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums/";

export function getAlbums() {
    return fetch(ALBUMS_URL).then((res) => res.json())
}


