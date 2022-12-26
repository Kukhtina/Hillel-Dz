import React from "react";
import './ContactItem.css';


function ContactItem(props) {
    return (
        <div className="items-container">
            <div>{props.item.name}</div>
            <div>{props.item.surname}</div>
            <div>{props.item.email}</div>
            <div>
                <button className="btn-edit" onClick={() => props.onEdit(props.item)}>Edit
                </button>
                <button className="btn-delete" onClick={() => props.delete(props.item.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ContactItem;
