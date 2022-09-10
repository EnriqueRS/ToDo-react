import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = JSON.parse(localStorage.getItem('token'));
        if(tokenString && tokenString !== 'undefined') {
            return tokenString;
        } else {
            return undefined;
        }
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}