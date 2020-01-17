import React, { useState } from 'react';
import { Grid, Paper, Typography, InputBase, Button } from '@material-ui/core';
import { AccountCircle, FavoriteBorder, Favorite } from '@material-ui/icons';

import './Card.css';
import Comment from '../Comment/Comment';

const Card = ({post}) => {
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
                    <Typography className="username" variant="subtitle2">{post.userName}</Typography>
                </div>
                <img className="image" src={`data:image/jpeg;base64,${post.imgEncoded}`} alt={post.userName}></img>
                <section className="body">
                    <div className="like">
                        <Typography className="people" variant="body2">Liekd by {post.likes.length} people</Typography>
                        { isLiked ? <Favorite onClick={onFavoriteHandle} /> : <FavoriteBorder onClick={onFavoriteHandle} /> }
                    </div>
                    <div className="comments">
                        {
                            post.mediaComments.map(comment => {
                                return <Comment key={comment._id} comment={comment} />;
                            })
                        }
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