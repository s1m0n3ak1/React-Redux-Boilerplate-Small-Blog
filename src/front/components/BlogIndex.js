// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, isEmpty } from 'lodash';

import { fetchAll } from '../actions';

// other components
import SinglePost from './BlogIndexPost';

class BlogIndex extends Component {

    componentDidMount = () => {
        this.props.fetchAll();
    }

    render = () => {
        const { posts } = this.props;
        return (
            <div>
                <section className='container'>
                    <h2>Recent Posts</h2>
                    <div className='column'>
                        { isEmpty(posts) === false ?
                            map(posts, post => (
                            <SinglePost key={ post._id } { ...post } />
                            ))
                            :
                            <p>Such a empty. Damn write something here!</p>
                        }
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
    mapStateToProps, { fetchAll }
)(BlogIndex);
