import React from 'react';
import {ButtonGroup, Button} from "@mui/material";
import { NavLink } from 'react-router-dom';

import useIsAuthorized from '../../../common/auth/hooks/useIsAuthorized';
import useUser from '../../../common/auth/hooks/useUser';

function Landing() {
    const user = useUser();
    const isAuthorized = useIsAuthorized();


    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {isAuthorized && <p>{user.name}</p>}
            <Button to="/admin" component={NavLink}>Admin Panel</Button>
            <Button to="/admin/users" component={NavLink}>Users Management</Button>
            {isAuthorized ? (
                <Button to="/auth/logout" component={NavLink}>Logout</Button>
            ) : (
                <Button to="/auth/login" component={NavLink}>Login</Button>
            )}
        </ButtonGroup>
    );
}

export default Landing;
