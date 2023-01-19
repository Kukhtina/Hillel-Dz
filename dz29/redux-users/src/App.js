import './App.css';

import {Container} from '@mui/material';
import {Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import UsersModule from './components/UsersModule';

function App() {
    return (
        <Container maxWidth="sm">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/users" element={<UsersModule/>}>
                    <Route path="" element={<UsersList/>}/>
                    <Route path=":id" element={<UserForm/>}/>
                </Route>
            </Routes>
        </Container>
    );
}

export default App;
