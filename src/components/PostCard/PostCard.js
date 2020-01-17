import React, { useState, Fragment } from 'react';

import { uploadImage } from '../../services/post';

import Loading from '../Loading/Loading';

import { Grid, Paper, InputBase, Button, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { DropzoneArea } from 'material-ui-dropzone'

import './PostCard.css';

const PostCard = () => {
    const [image, setImage] = useState([]);
    const [comment, setComment] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [status, setStatus] = useState(0);

    const onPostSumit = async (event) => {
        event.preventDefault();
        setIsloading(true);
        const response = await uploadImage(image[0], comment);
        if (response.status >= 200 && response.status < 300) {
            setImage([]);
            setComment('');
        }
        setStatus(response.status);
        setIsloading(false);
        setSnackOpen(true);
    }

    const onCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handleChange = (files) => {
        setImage(files);
    }

    const handleSnackClose = () => {
        setSnackOpen(false);
    }

    return (
        <Fragment>
            <Grid item xs={12} className="grid postcard">
                <Paper className="paper">
                    <form className="form" onSubmit={onPostSumit}>
                        <InputBase
                            fullWidth
                            value={comment}
                            onChange={onCommentChange}
                            placeholder="Add a comment..." />
                        <DropzoneArea
                            dropzoneText={image.length === 0 ? 'Select or drop your image' : ''}
                            dropzoneClass="droparea"
                            onChange={handleChange}
                            filesLimit={1}
                            acceptedFiles={['image/*']}
                            showAlerts={false}
                        />
                        <Button
                            className="postbutton"
                            type="submit"
                            color="primary"
                            disabled={image.length === 0}>Post</Button>
                    </form>
                </Paper>
            </Grid>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackOpen}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={
                    (status >= 200 && status < 300) ? 
                    'Post uploaded successfully' : 
                    'Fail to post, try again later'
                }
                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
            <Loading open={isLoading} />
        </Fragment>
    );
};

export default PostCard;