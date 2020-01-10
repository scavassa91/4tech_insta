import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';

import { logout } from '../../services/auth';

import './styles.css';

const Header = () => {
    const history = useHistory();

    const onLogoutHandle = () => {
        logout();
        history.push('/');
    }

    return (
        <AppBar className="header" position="static">
            <Container>
                <Toolbar className="toolbar">
                    <Typography variant="h6">
                        4T Insta
                    </Typography>
                    <Button onClick={onLogoutHandle} color="inherit">Logout</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;