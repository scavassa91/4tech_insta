import React, { Fragment } from 'react';

import Header from '../../components/Header/Header';
import { Container } from '@material-ui/core';

import Card from '../../components/Card/Card';

import './TimeLine.css';

const TimeLine = () => {
    

    return (
        <Fragment>
            <Header />
            <Container className="timeline">
                <Card />
            </Container>
        </Fragment>
    );
};

export default TimeLine;