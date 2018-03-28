import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import { postFetchAll } from '../actions';

// configurationsyar
import Head from './helmets/BlogIndex';

// other components
import SinglePost from './BlogIndexPost';

class BlogIndex extends Component {

    componentWillMount = () => {
        this.props.postFetchAll();
    }

    render = () => {
        const { posts = [] } = this.props;
        return (
            <div>
                <Head />
                <section className='container'>
                    <h2>Recent Posts</h2>
                    <div className='column'>
                        { map(posts, post => (
                            <SinglePost key={ post._id } { ...post } />
                        ))}
                    </div>
                </section>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(
    mapStateToProps, { postFetchAll }
)(BlogIndex);
