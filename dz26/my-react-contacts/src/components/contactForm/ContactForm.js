import React from "react";
import './ContactForm.css';
import {useNavigate} from "react-router-dom";


function ContactForm(props) {
    const navigate = useNavigate();

    function backToList() {
        navigate("/");
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const preparedValues = {
            name: e.target.elements.name.value,
            surname: e.target.elements.surname.value,
            email: e.target.elements.email.value
        };


        if (props.editItem?.id !== undefined && props.editItem?.id !== null) {
            props.updated({id: props.editItem.id, ...preparedValues});
        } else {
            props.add(preparedValues);
        }

        e.target.reset();
        backToList();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input defaultValue={props.editItem?.name} name="name" placeholder="Name"/>
            <input defaultValue={props.editItem?.surname} name="surname" placeholder="Surname"/>
            <input defaultValue={props.editItem?.email} name="email" placeholder="Email"/>
            <button className="btn-add" type="submit">Add</button>
        </form>
    );
}

export default ContactForm;
