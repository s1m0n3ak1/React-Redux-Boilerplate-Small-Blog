import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const helmet = {
    canonical: `http://localhost:8080/post/`,
};

class Head extends Component {
    render = () => {
        const { title, description, end } = this.props;
        return (
            <Helmet>
                <meta charSet='utf-8' />
                <title>{ title } | RRlog</title>
                <meta name='description' content={ description } />
                <link
                    rel='canonical'
                    href={ `${ helmet.canonical }${ end }` } />
            </Helmet>
        )
    }
}

export default Head;
