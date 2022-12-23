import React from "react";

import AlbumsItem from "./AlbumsItem";
import {getAlbumPhotos} from "../../photos/components/Services";


function Albums(props) {
    function onItemClick(albumId) {
        getAlbumPhotos(albumId).then((data) => {
            props.setPhotos({albumId, list: data});
        })
    }

    return (
        <ol>
            {props.albums.map((item) => {
                return <AlbumsItem key={item.id} album={item} itemClick={onItemClick} active={props.activeAlbumId === item.id}/>
            })}
        </ol>
    );
}


export default Albums;
