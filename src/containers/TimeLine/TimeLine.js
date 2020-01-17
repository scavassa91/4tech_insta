import React, { Fragment, useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import { Container } from '@material-ui/core';

import { getPosts } from '../../services/post';

import Card from '../../components/Card/Card';
import PostCard from '../../components/PostCard/PostCard';

import './TimeLine.css';


const TimeLine = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await getPosts();
            if (response.status >= 200 && response.status < 300) {
                setPosts(post => {
                    return post.concat(response.data);
                });
            }
        };
        fetchPosts();
    }, []);

    return (
        <Fragment>
            <Header />
            <Container className="timeline">
                <PostCard />
                {
                    posts.map(post => {
                        return <Card key={post._id} post={post} />
                    })
                }
            </Container>
        </Fragment>
    );
};

export default TimeLine;