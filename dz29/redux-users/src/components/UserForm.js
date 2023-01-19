import React, {useMemo} from 'react';
import {Button, Paper, TextField} from '@mui/material';
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import {Formik} from "formik";
import {useSelector} from "react-redux";

import {selectUsers} from "../store/usersSelector";
import {updateUser, createUser} from "../store/usersSlice";
import store from "../store/index";

const EMPTY_USER = {
    name: "",
    surname: "",
    email: ""
}


function UserForm() {
    const users = useSelector(selectUsers);

    const navigate = useNavigate();
    const {id: userId} = useParams();

    function isEmptyField(value) {
        return value === null || value === undefined || value.trim() === ""
    }

    function validate(values) {
        const errors = {};

        if (isEmptyField(values.name)) {
            errors.name = "Name is Required";
        }
        if (isEmptyField(values.surname)) {
            errors.surname = "Surname is Required";
        }
        if (isEmptyField(values.email)) {
            errors.email = "Email is Required";
        }

        return errors;
    }

    const initialValues = useMemo(() => {
        if (userId !== undefined && userId !== null && !isNaN(userId)) {
            return users.find((user) => user.id === userId) ?? EMPTY_USER
        }

        return EMPTY_USER
    }, [userId, users])

    function handleSubmit(values) {
        if (userId !== undefined && userId !== null && !isNaN(userId)) {
            store.dispatch(updateUser({id: userId, ...values}));
        } else {
            store.dispatch(createUser(values));
        }

        navigate('..');
    }


    return (
        <Paper>
            <Formik initialValues={initialValues} enableReinitialize validate={validate} onSubmit={handleSubmit}>
                {(props) => (
                    <>
                        <TextField
                            sx={{marginBottom: '10px',}}
                            name="name"
                            label="Name"
                            fullWidth
                            value={props.values.name}
                            onChange={props.handleChange}
                            error={!!props.errors.name}
                            helperText={props.errors.name}
                        />
                        <TextField
                            sx={{marginBottom: '10px',}}
                            name="surname"
                            label="Surname"
                            fullWidth
                            value={props.values.surname}
                            onChange={props.handleChange}
                            error={!!props.errors.surname}
                            helperText={props.errors.surname}
                        />
                        <TextField
                            sx={{marginBottom: '10px',}}
                            name="email"
                            label="Email"
                            fullWidth
                            value={props.values.email}
                            onChange={props.handleChange}
                            error={!!props.errors.email}
                            helperText={props.errors.email}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            onClick={props.handleSubmit}
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
                    </>
                )}
            </Formik>
        </Paper>
    );
}

export default UserForm;
