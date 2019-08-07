import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
    <div>
        <div>Home</div>
        <Link to="/users">Click me</Link>
    </div>
);

export default {
    component: HomePage
};