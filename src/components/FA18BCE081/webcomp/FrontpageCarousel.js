import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../webcomp/FrontpageCarouselstyle.css'

import { Carousel } from 'react-bootstrap';

class FrontpageCarousel extends Component {
    render() {
        return (
            <Carousel fade className='container-fluid' style={{padding:'0px', margin:'0px'}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/xbg_1.jpg"
                        alt="First slide"
                        style={{ width: '100%', height: '560px' }}
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 'bolder', fontSize: '300%', margin: '40px' }}>Dentist Service That You Can Trust</h3>
                        <Link to='/appointment'><button id='Appointmentbutton' style={{ border: 'none', background: '#3CBEB2', width: '250px', height: '50px', color: 'black', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '110%', margin: '20px' }}>MAKE AN APPOINTMENT</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/xbg_2.jpg"
                        alt="Second slide"
                        style={{ width: '100%', height: '560px' }}
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 'bolder', fontSize: '300%', margin: '40px' }}>A Brighter Dental Experienced.</h3>
                        <Link to='/appointment'><button id='Appointmentbutton' style={{ border: 'none', background: '#3CBEB2', width: '250px', height: '50px', color: 'black', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '110%', margin: '20px' }}>MAKE AN APPOINTMENT</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/slider_1.jpg"
                        alt="Third slide"
                        style={{ width: '100%', height: '560px' }}
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 'bolder', fontSize: '300%', margin:'40px' }}>DISCOVER YOUR SMILE</h3>
                        <Link to='/appointment'><button id='Appointmentbutton' style={{ border: 'none', background: '#3CBEB2', width: '250px', height: '50px', color: 'black', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '110%', margin: '20px' }}>MAKE AN APPOINTMENT</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/slider_4.jpg"
                        alt="Forth slide"
                        style={{ width: '100%', height: '560px' }}
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 'bolder', fontSize: '300%', margin: '40px' }}>HEALTHY MOUTH</h3>
                        <Link to='/appointment'><button id='Appointmentbutton' style={{ border: '1px solid', background: '#3CBEB2', width: '250px', height: '50px', color: 'black', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '110%', margin: '20px' }}>MAKE AN APPOINTMENT</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default FrontpageCarousel;