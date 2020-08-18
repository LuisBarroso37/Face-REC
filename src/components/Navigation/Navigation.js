import React from 'react';
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <nav>
                    <p onClick={() => onRouteChange('signout')} className='navigation'>Sign out</p>
                </nav>
            )
        } else {
            return (
                <nav>
                    <p onClick={() => onRouteChange('signin')} className='navigation'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='navigation'>Register</p>
                </nav>
            )
        }
}

export default Navigation;