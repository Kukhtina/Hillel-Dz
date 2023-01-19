import React from "react";
import {Button, Paper} from "@mui/material";
import {NavLink} from "react-router-dom";

function UsersNavigation() {
    return (
        <Paper sx={{
            marginBottom: '10px',
        }}>
            <Button to="" component={NavLink} className="link" end>List</Button>
            <Button to="add" component={NavLink} className="link">Add</Button>
        </Paper>
    )
}

export default UsersNavigation;
