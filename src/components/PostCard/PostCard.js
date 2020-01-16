import React, { useState } from 'react';

import { Grid, Paper, InputBase, Button } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone'

import './PostCard.css';

const PostCard = () => {
    const [image, setImage] = useState([]);
    const [comment, setComment] = useState('');
    
    const onPostSumit = (event) => {
        event.preventDefault();
        console.log('Post image');
    }
    
    const onCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handleChange = (files) => {
        setImage(files);
    }

    return (
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
                        acceptedFiles={	['image/*']}
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
    );
};

export default PostCard;