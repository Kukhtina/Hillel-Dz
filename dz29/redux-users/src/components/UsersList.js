import React from "react";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import store from "../store/index";
import {selectUsers} from "../store/usersSelector";
import {deleteUser} from "../store/usersSlice";


function UsersList() {
    const users = useSelector(selectUsers);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.surname}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    to={user.id}
                                    component={NavLink}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => store.dispatch(deleteUser(user.id))}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default UsersList;
