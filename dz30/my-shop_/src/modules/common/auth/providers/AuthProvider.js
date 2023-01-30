import {createContext, useState} from 'react';
import api from "../../../../api";

export const AuthContext = createContext(null);

function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    function login(username, password) {
        api.post("./auth/login", {
            login: username,
            password: password,
        }).then(({data}) => {
            window.token = data.token;

            return api.get('/auth/user').then(({ data }) => setUser(data));
        });
    }

    const value = {
        user,
        login,
        logout: () => setUser(null),
    };

return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);
}

export default AuthProvider;
