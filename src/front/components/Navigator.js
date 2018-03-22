import React, { Component } from 'react';
import { map } from 'lodash';
import { NavLink } from 'react-router-dom';

// components
import NavigatorLink from './NavigatorLink';

// config
import Routes from './routes/public';

// icons
import Brand from '../../assets/images/icon-redux.png';

class Navigator extends Component {

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
                        { Routes !== undefined ?
                            map(Routes, (route, i) => (
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

export default Navigator;
