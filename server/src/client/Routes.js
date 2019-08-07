import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
    {
        //shouldn't be in routes: Remove ...App, take routes array out of routes property
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];