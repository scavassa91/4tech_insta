import React from 'react';

import './Loading.css';

const Loading = ({open}) => {
    return (
        <div className={open ? 'loading' : 'loading hide'}>Loading...</div>
    );
};

export default Loading;