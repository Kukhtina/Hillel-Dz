import {configureStore} from '@reduxjs/toolkit';
import usersSliceReducer from './usersSlice';

export const store = configureStore({
    reducer: {
        users: usersSliceReducer,
    },
});

export default store;
