import React, { useState } from 'react';
import { Grid, Paper, Typography, InputBase, Button } from '@material-ui/core';
import { AccountCircle, FavoriteBorder, Favorite } from '@material-ui/icons';

import './Card.css';
import Comment from '../Comment/Comment';

const Card = () => {
    const [comment, setComment] = useState('');
    const [isLiked, setIsLiked] = useState(false);

    const onFavoriteHandle = () => {
        setIsLiked(!isLiked);
        console.log('Favorite');
    };

    const onCommentChange = (event) => {
        setComment(event.target.value);
    };

    const onPostSubmit = (event) => {
        event.preventDefault();
        console.log('Submited post');
    };

    return (
        <Grid item xs={12} className="grid card">
            <Paper className="paper">
                <div className="user">
                    <AccountCircle />
                    <Typography className="username" variant="subtitle2">Danilo Scavassa</Typography>
                </div>
                <img className="image" src="https://images.unsplash.com/photo-1527554677374-236d3bc88a34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="test"></img>
                <section className="body">
                    <div className="like">
                        <Typography className="people" variant="body2">Liekd by 10 people</Typography>
                        { isLiked ? <Favorite onClick={onFavoriteHandle} /> : <FavoriteBorder onClick={onFavoriteHandle} /> }
                    </div>
                    <div className="comments">
                        <Comment />
                    </div>
                </section>
                <hr />
                <form className="post" onSubmit={onPostSubmit}>
                    <InputBase
                        fullWidth
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={onCommentChange} />
                    <Button type="submit" color="primary" disabled={!comment}>Post</Button>
                </form>
            </Paper>
        </Grid>
    );
}

export default Card;