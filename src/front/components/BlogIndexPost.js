// libs
import React from 'react';
import { NavLink } from 'react-router-dom';

const SinglePost = ({ title, author, cover, category, text, shortid }) => (
    <div className='SinglePost row justify-content-start'>

        <figure
            className='col-3'
            style={{ backgroundImage: `url(${ cover })` }}
        />

        <div className='col-9'>

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
