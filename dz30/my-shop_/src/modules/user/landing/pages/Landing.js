import React from 'react';
import {ButtonGroup, Button, Typography} from "@mui/material";
import {NavLink} from 'react-router-dom';

import useIsAuthorized from '../../../common/auth/hooks/useIsAuthorized';
import useUser from '../../../common/auth/hooks/useUser';

function Landing() {
    const user = useUser();
    const isAuthorized = useIsAuthorized();


    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group"
                     sx={{flex: 1, minHeight: "64px", borderRadius: "0"}}>
            {isAuthorized && <Typography
                component="p"
                sx={{flex: 1, display: "flex", alignItems: "center", padding: "0 20px"}}
            >
                {user.name}
            </Typography>}
            <Button to="/admin" component={NavLink} sx={{borderRadius: 0}}>Admin Panel</Button>
            <Button to="/admin/users" component={NavLink} sx={{borderRadius: 0}}>Users Management</Button>
            {isAuthorized ? (
                <Button to="/auth/logout" component={NavLink} sx={{borderRadius: 0}}>Logout</Button>
            ) : (
                <Button to="/auth/login" component={NavLink} sx={{borderRadius: 0}}>Login</Button>
            )}
        </ButtonGroup>
    );
}

export default Landing;
