import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';

import './styles.css';

const Login = () => {
    return (
        <div className="login">
            <Grid item xs={2}>
                <Paper className="paper">
                    <form noValidate autoComplete="off">
                        <TextField id="login" label="Login" />
                        <TextField type="password" id="password" label="Password" />
                        <div>
                            <Button color="primary">Sign in</Button>
                            <Button color="primary">Sign up</Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Login;