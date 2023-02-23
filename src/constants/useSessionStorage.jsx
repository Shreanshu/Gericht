import React from 'react';

const useSessionStorage = () => {
    const SetSessionStorage = (key, value) => {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    };

    const GetSessionStorage = (key) => {
        return JSON.parse(window.sessionStorage.getItem(key));
    };

    return [GetSessionStorage, SetSessionStorage];
};

export default useSessionStorage;