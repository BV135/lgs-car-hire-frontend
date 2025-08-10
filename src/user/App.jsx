import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './Registration';

const UserApp = () => {
    return (
        <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/signup" element={<Registration />} />
        </Routes>
    );
};

export default UserApp;