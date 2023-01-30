import LeftNavigation from '../../modules/admin/common/LeftNavigation';
import {Outlet} from 'react-router-dom';
import ProtectedRoute from '../common/auth/components/ProtectedRoute';
import React from 'react';
import TopBar from '../../modules/admin/common/TopBar';
import {Paper, Box} from "@mui/material";

function AdminApp() {
    return (
        <ProtectedRoute roles={['admin', 'sales']}>
            <Paper sx={{flex: 1, minHeight: "100%"}}>
                <TopBar/>
                <Box sx={{flex: 1, minHeight: "calc(100% - 64px)", display: "flex"}}>
                    <LeftNavigation/>
                    <Outlet/>
                </Box>
            </Paper>
        </ProtectedRoute>
    );
}

export default AdminApp;
