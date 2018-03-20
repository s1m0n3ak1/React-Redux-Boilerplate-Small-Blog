// libs
import React from 'react';
import { NavLink } from 'react-router-dom';

const SinglePost = ({
        title,
        author,
        cover,
        category,
        text,
        shortid,
        date
    }) => (
    <div className='SinglePost row justify-content-start'>

        <figure
            className='col-lg-3 col-md-4'
            style={{ backgroundImage: `url(${ cover })` }}
        />

        <div className='col-lg-9 col-md-8 col-sm-12'>

            <small className='text-muted'>
                { `${ date.split('T')[0] } - ${ date.split('T')[1].split('.')[0] }` }
            </small>
            <h3>{ title }</h3>

            <small className='text-muted'>
                Posted in:&nbsp;
                <strong>
                    { category }
                </strong>
                &nbsp;by&nbsp;
                <strong>
                    { author }
                </strong>
            </small>

            <p>
                { text.substring(0,220) + '...' }
            </p>

            <NavLink
                activeClassName='active'
                to={ `/post/${ shortid }` }>
                Read More
            </NavLink>

        </div>
    </div>
);

export default SinglePost;
