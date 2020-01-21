import React, { useState, useEffect, useCallback } from 'react';

import { Grid, Paper, Typography, InputBase, Button } from '@material-ui/core';
import { AccountCircle, FavoriteBorder, Favorite } from '@material-ui/icons';

import { sendComment, sendLike } from '../../services/post';

import Comment from '../Comment/Comment';

import './Card.css';

const Card = ({post, onCommentSuccess}) => {
    const [comment, setComment] = useState('');
    const [isLiked, setIsLiked] = useState(false);

    const haveLiked = useCallback(() => {
        const myUserId = localStorage.getItem('userId');
        const found = post.likes.find(userId => userId === myUserId);
        if (found) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [post.likes]);

    const onFavoriteHandle = () => {
        setIsLiked(!isLiked);
        sendLike(localStorage.getItem('userId'), post._id)
            .catch(() => {
                setIsLiked(!isLiked);
            });
    };

    const onCommentChange = (event) => {
        setComment(event.target.value);
    };

    const onCommentSubmit = async (event) => {
        event.preventDefault();
        const response = await sendComment(localStorage.getItem('userId'), post._id, comment);
        if (response.status >= 200 && response.status < 300) {
            setComment('');
            onCommentSuccess(post._id, response.data);
        }
    };

    useEffect(() => {
        haveLiked();
    }, [haveLiked]);

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
                        <Typography className="people" variant="body2">Liked by {post.likes.length} people</Typography>
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
                <form className="post" onSubmit={onCommentSubmit}>
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