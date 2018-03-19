// libs
import React, { Component } from 'react';
import { map } from 'lodash';
import { NavLink } from 'react-router-dom';

//components
import NavigatorLink from './NavigatorLink';

// icons
import Brand from '../../assets/images/icon-redux.png';

const routes = [
    {
        label: 'Blog',
        destination: '/',
        type: 'link'
    },
    {
        label: 'New Post',
        destination: '/compose',
        type: 'button'
    }
];

export default class Navigator extends Component {

    render = () => {
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                <NavLink
                      className='navbar-brand'
                      to='/'>
                    <img
                        src={ Brand }
                        alt='Logo'
                        width={ 38 }
                    />
                </NavLink>

                <div className='navbar-collapse'>
                    <div className='navbar-nav mr-auto'>
                        { routes !== undefined ?
                            map(routes, (route, i) => (
                                <NavigatorLink
                                    key={ i }
                                    { ...route }
                                />
                            ))
                            :
                            null
                        }
                    </div>
                </div>
            </nav>
        );
    };
}
