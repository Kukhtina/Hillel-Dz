import {Form, Formik} from 'formik';

import {TextField, Button, Container, Box, Avatar, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import {Navigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useIsAuthorized from '../hooks/useIsAuthorized';

const initialValues = {username: '', password: '', role: 'admin'};

function Login() {
    const {login} = useAuth();
    const isAuthorized = useIsAuthorized();

    function onSubmit({username, password, role}) {
        login(username, password, role);
    }

    return (
        <Container maxWidth="xs">
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ width: 54, height: 54, m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon sx={{ width: 34, height: 34}}/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                </Box>
            </Container>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({handleChange, values, touched, errors}) => <Form>
                {isAuthorized && <Navigate replace={true} to="/"/>}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    error={touched.username && !!errors.username}
                    helperText={touched.username ? errors.username : undefined}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    error={touched.password && !!errors.password}
                    helperText={touched.password ? errors.password : undefined}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Role"
                    id="role"
                    name="role"
                    onChange={handleChange}
                    value={values.role}
                    error={touched.role && !!errors.role}
                    helperText={touched.role ? errors.role : undefined}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Login
                </Button>
            </Form>}
        </Formik>
        </Container>
    );
}

export default Login;
