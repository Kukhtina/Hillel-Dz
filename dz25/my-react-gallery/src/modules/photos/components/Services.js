import React from "react";


const ALBUM_PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos?";

export function getAlbumPhotos(albumId) {
    return fetch(ALBUM_PHOTOS_URL + new URLSearchParams({albumId})).then((res) => res.json());
}
