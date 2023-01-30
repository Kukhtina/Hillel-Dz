import { Avatar, Box, Button, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Navigate } from 'react-router-dom';
import SuperTextField from '../components/form/SuperTextField';
import api from '../../../../api';
import useAuth from '../hooks/useAuth';
import useIsAuthorized from '../hooks/useIsAuthorized';

const initialValues = { username: '', password: '' };

function Login() {
    const { login } = useAuth();
    const isAuthorized = useIsAuthorized();

    function onSubmit({ username, password }) {
        login(username, password);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form noValidate>
                {isAuthorized && <Navigate replace={true} to="/" />}
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <SuperTextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            name="username"
                            autoFocus
                        />
                        <SuperTextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Form>
        </Formik>
    );
}

export default Login;
