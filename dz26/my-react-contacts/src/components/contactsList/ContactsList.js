import React from "react";
import {useNavigate} from "react-router-dom";

import ContactsItem from "./components/contactItem/ContactItem";

import './ContactsList.css';


function ContactsList(props) {
    const navigate = useNavigate();

    function onBtnAdd() {
        navigate("/addForm");
    }

    function onEdit(item) {
        props.setEditItem(item);
        navigate("/EditForm");
    }


    return (
        <div className="table">
            <div className="header">
                <div>Name</div>
                <div>Surname</div>
                <div>Email</div>
                <div>Action</div>
            </div>
            {props.contacts.map((item) => {
                return <ContactsItem key={item.id} item={item} onEdit={onEdit} delete={props.delete}/>
            })}
            <button onClick={onBtnAdd} className="btn-to-form">Add</button>
        </div>
    )
}

export default ContactsList;
