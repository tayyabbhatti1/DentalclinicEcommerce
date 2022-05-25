import React, { Component } from 'react';
import '../webProject/navbarFitnessstyle.css';
import { Link } from 'react-router-dom';

import heropic from '../images/fitness1.png'

class NavbarFitness extends Component {
    render() {
        return (
            <navbar className='navbar-main'>
                {/* <div className='Logo'>
                    <img src={logopic}/>
                </div> */}
                
                <div className='text'>
                    <h1>MAKE YOUR</h1>
                    <h2>BODY SHAPE</h2>
                    <p>In regard to using gym work experience to help  with my college course I was able to do soon.</p>
                </div>
                <div className='getStarted'>
                    <button id='getStartedButton'>Get Started</button>
                </div>
                <div className='hero-pic'>
                    <img src={heropic} />
                </div>
            </navbar>
        );
    }
}

export default NavbarFitness;