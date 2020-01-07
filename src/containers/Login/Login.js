import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';

import './styles.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onFormLoginSubmit = (event) => {
        event.preventDefault();
        console.log('Login');
    };

    const onFormSignInSubmit = (event) => {
        event.preventDefault();
        console.log('Sign in');
    };

    const onSignUpInHandle = () => {
        setIsLogin(!isLogin);
    };

    const onUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const renderLogin = () => {
        return (
            <form onSubmit={onFormLoginSubmit}>
                <TextField
                    id="userName"
                    label="User Name"
                    value={userName}
                    onChange={onUserNameChange}
                    required />
                <TextField
                    type="password"
                    id="password"
                    label="Password" 
                    value={password}
                    onChange={onPasswordChange}
                    required />
                <div className="loginButtons">
                    <Button type="submit" color="primary">Sign in</Button>
                    <Button
                        type="button"
                        color="primary"
                        onClick={onSignUpInHandle}
                    >Sign up</Button>
                </div>
            </form>
        );
    };

    const renderSignIn = () => {
        return (
            <form onSubmit={onFormSignInSubmit}>
                <TextField
                    id="userName"
                    label="User Name"
                    value={userName}
                    required />
                <TextField
                    type="password"
                    id="password"
                    label="Password"
                    value={password}
                    required />
                <div className="loginButtons">
                    <Button type="submit" color="primary">Register</Button>
                    <Button
                        type="button"
                        color="secondary"
                        onClick={onSignUpInHandle}
                    >Back</Button>
                </div>
            </form>
        );
    };

    return (
        <div className="login">
            <Grid item xs={2}>
                <Paper className="paper">
                    <Typography variant="h6" gutterBottom>
                        4TInsta
                    </Typography>
                    { isLogin ? renderLogin() : renderSignIn() }
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;