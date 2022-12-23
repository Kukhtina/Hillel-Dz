import React, {useState} from "react";
import PhotosItem from "./PhotosItem";
import './Photos.css';

function Photos(props) {
    const [activePhotoUrl, setActivePhotoUrl] = useState();

    return (
        <div>
            {props.photos.list.map((item) => {
                return <PhotosItem key={item.id} photo={item} setPhotos={item} setActivePhotoUrl={setActivePhotoUrl}/>

            })}
            {!!activePhotoUrl &&
                <div className="active-photo" onClick={() => setActivePhotoUrl(undefined)}>
                    <img className="act" src={activePhotoUrl} alt=""/>
                </div>}
        </div>
    );
}


export default Photos;
