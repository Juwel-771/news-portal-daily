import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);

export default routes;