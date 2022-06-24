import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png';

const Logo= () => {
    return (
        <div className="ma4 mt0">
        <Tilt className="Tilt-inner pa3">
            <div style={{ height: '150px', width: '100px' }}>
                <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
            </div>
        </Tilt>
        </div>
    );
}

export default Logo