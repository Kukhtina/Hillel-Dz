import {Button, Paper, TextField} from '@mui/material';
import {NavLink, useNavigate, useParams} from 'react-router-dom';

import React, {useState} from 'react';
import useUser from '../hooks/useUser';

function UserForm() {
    const {id} = useParams();
    const {user, changeUser, saveUser} = useUser(id);
    const [userErrors, setUserErrors] = useState({});

    const navigate = useNavigate();

    function onInputChange(e) {
        changeUser({[e.target.name]: e.target.value});
        setUserErrors((userErrors) => ({...userErrors, [e.target.name]: false}))
    }

    function onFormSubmit(e) {
        e.preventDefault();

        let valid = true;

        Object.keys(user).forEach((key) => {
            const value = user[key];

            if ((value.trim() === "" || value === null || value === undefined)) {
                setUserErrors((userErrors) => ({...userErrors, [key]: true}));
                valid = false;
            }
        })


        if (valid) {
            saveUser(user).then(() => navigate('..'));
        }
    }


    return (
        <Paper>
            <form onSubmit={onFormSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    value={user.name}
                    onChange={onInputChange}
                    fullWidth
                    error={userErrors.name}
                />
                <TextField
                    name="surname"
                    label="Surname"
                    value={user.surname}
                    onChange={onInputChange}
                    fullWidth
                    error={userErrors.surname}
                />
                <TextField
                    name="email"
                    label="Email"
                    value={user.email}
                    onChange={onInputChange}
                    fullWidth
                    error={userErrors.email}
                />
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                >
                    Save
                </Button>
                <Button
                    variant="text"
                    color="error"
                    to=".."
                    component={NavLink}
                >
                    Cancel
                </Button>
            </form>
        </Paper>
    );
}

export default UserForm;
