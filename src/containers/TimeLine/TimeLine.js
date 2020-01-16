import React, { Fragment } from 'react';

import Header from '../../components/Header/Header';
import { Container } from '@material-ui/core';

import Card from '../../components/Card/Card';
import PostCard from '../../components/PostCard/PostCard';

import './TimeLine.css';


const TimeLine = () => {
    return (
        <Fragment>
            <Header />
            <Container className="timeline">
                <PostCard />
                <Card />
            </Container>
        </Fragment>
    );
};

export default TimeLine;