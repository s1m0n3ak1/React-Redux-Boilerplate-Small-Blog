// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// imported functions
import { postFetchOne } from '../actions';

// imported components
import Head from './helmets/BlogPost';

class BlogPost extends Component {

    state = {
        end: null
    }

    componentWillMount = () => {
        const { id } = this.props.match.params;
        this.props.postFetchOne(id);

        this.setState({ end: id })
    }

    render = () => {
        const { post } = this.props;
        const { end } = this.state;

        if(!post) {
          return <div> Loading... </div>;
        }

        let title = post.title;
        let text = post.text;

        return (
            <article className='Article'>
                <Head
                    title={ title }
                    description={ text.split('\n')[0] }
                    end={ end }
                />
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
        mapStateToProps, { postFetchOne }
    )(BlogPost)
);
