import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";

import {deleteContact, getContacts, postContact, updateContact} from './api';

import ContactsList from "./components/contactsList/ContactsList";
import ContactForm from "./components/contactForm/ContactForm";

import './App.css';

function App() {
    const [contactsList, setContactsList] = useState([]);
    const [editItem, setEditItem] = useState();

    useEffect(() => {
        getContacts().then((res) => {
            setContactsList(res.data);
        })
    }, []);

    function onDelete(id) {
        deleteContact(id).then(() => {
            setContactsList(contactsList.filter((item) => item.id !== id));
        })
    }

    function onAddContact(contact) {
        postContact(contact).then((data) => {
            setContactsList([...contactsList, data.data]);
        })
    }

    function onUpdateContact(contact) {
        updateContact(contact).then((data) => {
            const newItemData = data.data;
            const updatedList = [...contactsList].map((item) => {
                if (item.id === newItemData.id) {
                    return newItemData;
                } else {
                    return item;
                }
            });
            setContactsList(updatedList);
        })
    }


    return (
        <div className="App">
            <h1 className="appTitle">Contacts List</h1>
            <Routes>
                <Route path="/"
                       element={<ContactsList contacts={contactsList} setEditItem={setEditItem} delete={onDelete}/>}/>
                <Route path="addForm" element={<ContactForm add={onAddContact}/>}/>
                <Route path="editForm" element={<ContactForm updated={onUpdateContact} editItem={editItem}/>}/>
            </Routes>
        </div>
    );
}

export default App;
