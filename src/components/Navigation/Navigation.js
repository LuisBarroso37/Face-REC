import React from 'react';
import './Navigation.css';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
        if (isSignedIn) {
            return (
                <nav className='nav'>
                    <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
                </nav>
            )
        } else {
            return (
                <nav className='nav'>
                    <p onClick={() => onRouteChange('signin')} className='navigation'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='navigation'>Register</p>
                </nav>
            )
        }
}

export default Navigation;