import React from 'react';

import { Typography } from '@material-ui/core';

const Comment = ({comment}) => {
    return (
        <Typography variant="body2">
            <b>{comment.userName}: </b>
            <label>{comment.comment}</label>
        </Typography>
    );
}

export default Comment;