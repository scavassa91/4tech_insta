import React, { Fragment, useEffect, useState, useCallback } from 'react';

import Header from '../../components/Header/Header';
import { Container } from '@material-ui/core';

import { getPosts } from '../../services/post';

import Card from '../../components/Card/Card';
import PostCard from '../../components/PostCard/PostCard';

import './TimeLine.css';


const TimeLine = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);

    const fetchPosts = useCallback(async (page = 0) => {
        const response = await getPosts(page);
        if (response.status >= 200 && response.status < 300) {
            setPosts((posts) => {
                return posts.concat(response.data);
            });
        }
    }, []);

    const handleScroll = useCallback(async () => {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom) {
            setPage(page => page + 10);
        }
    }, []);

    useEffect(() => {
        fetchPosts(page);
    }, [page, fetchPosts]);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);

        return (() => {
            document.removeEventListener("scroll", handleScroll);
        });
    }, [handleScroll]);

    const addNewPsot = (newPost) => {
        setPosts(posts => [
            newPost,
            ...posts
        ]);
    };

    const addNewComment = (postId, newComment) => {
        const newPosts = posts.map(post => {
            if (post._id === postId) {
                return {
                    ...post,
                    mediaComments: post.mediaComments.concat(newComment)
                };
            }
            return post;
        });
        setPosts(newPosts);
    };

    return (
        <Fragment>
            <Header />
            <Container className="timeline">
                <PostCard onSuccess={addNewPsot} />
                {
                    posts.map(post => {
                        return <Card key={post._id} post={post} onSuccess={addNewComment} />
                    })
                }
            </Container>
        </Fragment>
    );
};

export default TimeLine;