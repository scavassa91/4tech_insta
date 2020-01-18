import React, { Fragment, useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import { Container } from '@material-ui/core';

import { getPosts } from '../../services/post';

import Card from '../../components/Card/Card';
import PostCard from '../../components/PostCard/PostCard';

import './TimeLine.css';


const TimeLine = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await getPosts();
        if (response.status >= 200 && response.status < 300) {
            setPosts(response.data);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Fragment>
            <Header />
            <Container className="timeline">
                <PostCard onSuccess={fetchPosts} />
                {
                    posts
                        .reverse()
                        .map(post => {
                            return <Card key={post._id} post={post} />
                        })
                }
            </Container>
        </Fragment>
    );
};

export default TimeLine;