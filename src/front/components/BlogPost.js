// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// imported functions
import { fetchPost } from '../actions';

class BlogPost extends Component {

    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render = () => {
        const { post } = this.props;

        if(!post) {
          return <div> Loading... </div>;
        }

        return (
            <article className='Article'>

                <figure
                    style={{ backgroundImage: `url(${ post.cover })` }}
                    className='container-fluid'
                >

                    <div className='container'>

                        <small>
                           { `${ post.date.split('T')[0] } -
                              ${ post.date.split('T')[1].split('.')[0] }` }
                        </small>
                        <h1>
                            { post.title }
                        </h1>

                        <small>
                            Posted in:&nbsp;
                            <strong>
                                { post.category }
                            </strong>
                            &nbsp;by&nbsp;
                            <strong>
                                { post.author }
                            </strong>
                        </small>

                    </div>
                </figure>

                <div className='container'>
                    <p>{ post.text }</p>
                    <Link to='/'>Back</Link>
                </div>

            </article>
        );
    };
}

const mapStateToProps = ({ posts }, ownProps) => {
    return {
        post: posts[ownProps.match.params.id]
    };
}

export default withRouter(
    connect(
        mapStateToProps, { fetchPost }
    )(BlogPost)
);
