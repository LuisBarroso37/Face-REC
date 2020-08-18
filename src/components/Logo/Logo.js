import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import brain from './brain-logo.png';

const Logo = () => {
    return (
        <div className='logo-container'>
            <Tilt className="Tilt" options={{ max: 55 }} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner">
                    <img className='logo' src={brain} alt='Brain logo' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;