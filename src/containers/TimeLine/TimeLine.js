import React, { Fragment, useState } from 'react';

import Header from '../../components/Header/Header';
import { Container, Grid, Paper, InputBase, Button } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone'

import Card from '../../components/Card/Card';

import './TimeLine.css';


const TimeLine = () => {
    const [image, setImage] = useState([]);

    const handleChange = (files) => {
        setImage(files);
    }
    return (
        <Fragment>
            <Header />
            <Container className="timeline">
                <Grid item xs={12} className="grid postcard">
                    <Paper className="paper">
                        <form className="form">
                            <InputBase
                                fullWidth
                                placeholder="Add a comment..." />
                            <DropzoneArea
                                dropzoneText={image.length === 0 ? 'Select or drop your image' : ''}
                                dropzoneClass="droparea"
                                onChange={handleChange}
                                filesLimit={1}
                                acceptedFiles={	['image/*']}
                                showAlerts={false}
                            />
                            <Button className="postbutton" type="submit" color="primary" disabled={image.length === 0}>Post</Button>
                        </form>
                    </Paper>
                </Grid>
                <Card />
            </Container>
        </Fragment>
    );
};

export default TimeLine;