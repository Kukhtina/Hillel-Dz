import React from "react";
import {Outlet} from "react-router-dom";
import UsersNavigation from "../components/UsersNavigation";


function UsersModule() {
    return (
        <div>
            <UsersNavigation/>
            <Outlet/>
        </div>
    )
}


export default UsersModule;
