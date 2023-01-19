import api from '../api';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: [],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, {payload}) => {
            state.users = payload;
        },
        updateUser: (state, {payload}) => {
            state.users = state.users.map((item) => item.id === payload.id ? payload : item);
        },
        deleteUser: (state, {payload}) => {
            state.users = state.users.filter((item) => item.id !== payload);
        },
        createUser: (state, {payload}) => {
            state.users.push(payload);
        },
    },
});

export default usersSlice.reducer;

export function getUsersList() {
    return (dispatch) => {
        api.get('users').then(({data}) => {
            dispatch(usersSlice.actions.setUsers(data));
        });
    };
}

export function createUser(newUser) {
    return (dispatch) => {
        api.post('users', newUser).then(({data}) => dispatch(usersSlice.actions.createUser(data)));
    };
}

export function updateUser(updatedUser) {
    return (dispatch) => {
        api.put('users/' + updatedUser.id, updatedUser).then(({data}) => dispatch(usersSlice.actions.updateUser(data)));
    };
}

export function deleteUser(id) {
    return (dispatch) => {
        api.delete('users/' + id).then(() => dispatch(usersSlice.actions.deleteUser(id)));
    };
}
