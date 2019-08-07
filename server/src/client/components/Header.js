import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({auth}) => {
    const authBtn = auth ? (
        <a href="/api/logout">Sign out</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    );

    return (
        <div>
            <Link to="/">React SSR</Link>
            <div>
                <Link to='/users'>Users</Link>
                <Link to='/admins'>Admins</Link>
                {authBtn}
            </div>
        </div>
    );
};

const mapStateToProps = ({auth}) => {
    return {auth};
};

export default connect(mapStateToProps)(Header);