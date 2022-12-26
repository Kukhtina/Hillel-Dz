import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/',
})

export function getContacts() {
    return api({url: "/users"});
}

export function postContact(contactData) {
    return api({url: "/users", method: "POST", data: contactData});
}

export function updateContact(contactData) {
    return api({url: "/users/" + contactData.id, method: "PUT", data: contactData});
}

export function deleteContact(id) {
    return api({url: "users/" + id, method: "DELETE"});
}


