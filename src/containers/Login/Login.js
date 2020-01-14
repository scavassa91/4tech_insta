import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { login } from '../../services/auth';
import { user } from '../../services/user';

import './styles.css';

const Login = () => {
    const history = useHistory();
    const [isLogin, setIsLogin] = useState(true);
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onFormLoginSubmit = async (event) => {
        event.preventDefault();
        const resp = await login(userName, password);
        if (resp.status >= 200 && resp.status < 300) {
            history.push('/timeline');
        } else {
            console.log('User name ou password inválidos');
        }
    };

    const onFormSignInSubmit = (event) => {
        event.preventDefault();
        user.save(userName, fullName, password);
        onSignUpInHandle();
    };

    const onSignUpInHandle = () => {
        setIsLogin(!isLogin);
    };

    const onFullNameChange = (event) => {
        setFullName(event.target.value);
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
                    id="fullName"
                    label="Full Name"
                    value={fullName}
                    onChange={onFullNameChange}
                    required />
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
            <Grid item xs={2} className="grid">
                <Paper className="paper">
                    <Typography variant="h6" gutterBottom>
                        4T Insta
                    </Typography>
                    { isLogin ? renderLogin() : renderSignIn() }
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;