import React from 'react';
import { Helmet } from 'react-helmet';

export const helmet = {
    title: 'Welcome | RRlog',
    canonical: 'http://localhost:8080',
    description: 'React / Redux Blog'
};

export const Head = () => (
    <Helmet>
        <meta charSet='utf-8' />
        <title>{ helmet.title }</title>
        <meta name='description' content={ helmet.description } />
        <link rel='canonical' href={ helmet.canonical } />
    </Helmet>
);
