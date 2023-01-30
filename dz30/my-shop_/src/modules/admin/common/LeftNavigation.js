import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {NavLink} from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import React from 'react';

function LeftNavigation() {
    return (<Box maxWidth="200px" minHeight="100%" boxShadow={1} zIndex={1}>
        <Divider />
        <List component="nav">
            <ListItemButton component={NavLink} to="/admin">
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItemButton>
            <ListItemButton component={NavLink} to="/admin/categories">
                <ListItemIcon>
                    <CategoryIcon/>
                </ListItemIcon>
                <ListItemText primary="Categories"/>
            </ListItemButton>
            <ListItemButton component={NavLink} to="/admin/products">
                <ListItemIcon>
                    <ProductionQuantityLimitsIcon/>
                </ListItemIcon>
                <ListItemText primary="Products"/>
            </ListItemButton>
            <Divider sx={{my: 1}}/>
        </List>
    </Box>)
}

export default LeftNavigation;
