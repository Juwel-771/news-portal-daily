import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NewsDetails from '../pages/Home/NewsDetails';
import PrivateRoutes from './PrivateRoutes';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/news.json')
            },
            {
                path: '/newsDetails/:id',
                element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default routes;