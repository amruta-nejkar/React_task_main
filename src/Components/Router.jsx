import React from 'react';
import {
        Route, Routes
      } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from './Home';
import LoginForm from './LoginForm';
function Router(props) {
    return (
        <Routes>
            <Route
            path="/"
            element={(<Login/>)}
            />
            <Route
            path="/login"
           element={(<LoginForm/>)}
            />
            <Route
            path="/post"
            element={(<Home/>)}
            />

        </Routes>
    );
}

export default Router;