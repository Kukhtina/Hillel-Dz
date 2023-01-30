import { Navigate, Route, Routes } from 'react-router-dom';

import AdminApp from './modules/admin/AdminApp';
import Dashboard from './modules/admin/dashboard/Dashboard';
import Landing from './modules/user/landing/pages/Landing';
import Login from './modules/common/auth/pages/Login';
import Logout from './modules/common/auth/pages/Logout';
import React from 'react';
import Signup from './modules/common/auth/pages/Signup';
import Users from './modules/admin/users/pages/Users';
import Products from './modules/admin/products/Products';
import ProductsList from './modules/admin/products/ProductsList';
import ProductForm from './modules/admin/products/ProductForm';
import {Container, CssBaseline} from "@mui/material";

function App() {
    return (
        <Container component="main" maxWidth={false} disableGutters sx={{display: "flex", minHeight: "100vh"}}>
            <CssBaseline />
        <Routes>
            <Route path="" element={<Landing />} />
            <Route path="auth">
                <Route
                    path=""
                    element={<Navigate replace={true} to="login" />}
                />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="admin" element={<AdminApp />}>
                <Route
                    path=""
                    element={<Navigate replace={true} to="dashboard" />}
                />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="products" element={<Products />}>
                    <Route path="" element={<ProductsList />} />
                    <Route path=":id" element={<ProductForm />} />
                </Route>
            </Route>
        </Routes>
        </Container>
    );
}

export default App;
