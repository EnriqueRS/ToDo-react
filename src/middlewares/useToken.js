import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        if(tokenString && tokenString !== 'undefined') {
            console.log(`getToken ${tokenString}`);
            const userToken = JSON.parse(tokenString);
            return userToken?.token;
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