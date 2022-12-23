import React from "react";

function PhotosItem(props) {
    return (
        <img onClick={() => props.setActivePhotoUrl(props.photo.url)} src={props.photo.thumbnailUrl}/>
    );
}


export default PhotosItem;
