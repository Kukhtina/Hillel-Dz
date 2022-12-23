import React from "react";

import './AlbumsItem.css';

function AlbumsItem(props) {
    return (
        <li onClick={() => props.itemClick(props.album.id)} className={`album-item ${props.active ? "active" : "" }`}>
            {props.album.title}
        </li>
    );
}


export default AlbumsItem;
