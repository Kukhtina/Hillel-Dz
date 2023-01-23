import {Box, Button, Container, Typography} from "@mui/material";

import {Navigate, NavLink} from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';
import useIsAuthorized from '../hooks/useIsAuthorized';

function Logout() {
    const {logout} = useAuth();
    const isAuthorized = useIsAuthorized();

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    marginBottom: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5" align="center" maxWidth={200}>
                    Are you sure, you want to logout?
                </Typography>
            </Box>
            {!isAuthorized && <Navigate to="/auth/login"/>}
            <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                    color="inherit"
                    variant="contained"
                    sx={{mt: 3, mb: 2, marginRight: 2}}
                    component={NavLink}
                    to=".."
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={logout}
                >
                    Logout
                </Button>
            </Box>
        </Container>
    );
}

export default Logout;
