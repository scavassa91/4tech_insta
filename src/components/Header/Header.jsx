import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, IconButton } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import { logout } from '../../services/auth';

import './styles.css';

const Header = () => {
    const navigate = useNavigate();

    const onLogoutHandle = () => {
        logout();
        navigate('/');
    }

    return (
        <AppBar className="header" position="fixed">
            <Container>
                <Toolbar className="toolbar">
                    <Typography variant="h6">
                        4T Insta
                    </Typography>
                    <IconButton color="inherit" aria-label="logou" onClick={onLogoutHandle}>
                        <ExitToApp />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;