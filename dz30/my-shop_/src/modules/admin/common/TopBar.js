import {AppBar, IconButton, Toolbar, Typography,} from '@mui/material';

import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import React from 'react';

function TopBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    component="h1"
                    variant="h5"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >My Shop Admin</Typography>
                <IconButton
                    color="inherit"
                    component={NavLink}
                    to="/auth/logout"
                >
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
