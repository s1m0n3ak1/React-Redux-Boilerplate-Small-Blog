import React from 'react';
import { Helmet } from 'react-helmet';

const helmet = {
    title: 'insert New Post | RRlog',
    canonical: 'http://localhost:8080/compose',
    description: 'Insert a new post on your blog'
};

const Head = () => (
    <Helmet>
        <meta charSet='utf-8' />
        <title>{ helmet.title }</title>
        <meta name='description' content={ helmet.description } />
        <link rel='canonical' href={ helmet.canonical } />
    </Helmet>
);

export default Head;
