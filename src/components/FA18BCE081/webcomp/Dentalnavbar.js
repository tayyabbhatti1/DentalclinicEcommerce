import React from 'react';
import { Link } from "react-router-dom";

import '../webcomp/Dentalnavbarstyle.css'




const Dentalnavbar = () => {

    const Linkstyles = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'normal'
        }       
    }
    
        return (
                
                <nav>
                    <div className='row-1' style={{ width: '100%', height: '60px', background: '#faf8f8' }}>
                        <img src={"/Images/logo-02.png"} alt='Logo' style={{ width: '150px' }} />
                    </div>

                    <div className='row' style={{ background: '#3CBEB2', width: '101%', height: '90px' }}>


                        <div className='col-8' >
                            <div className="menu" style={{ marginTop: '15px' }}>
                                <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '60px' }}>
                                    <li style={{ listStyle: 'none', marginRight: '30px' }}>
                                        <Link to="/home" id='menu-list' style={{ Linkstyles, color: 'black', textDecoration: 'none', fontFamily: 'Poppins', fontSize: '120%', fontWeight: 'boldlight' }}><p style={{ marginTop: '10px' }}>Home</p></Link>
                                    </li>
                                    <li style={{ listStyle: 'none', marginRight: '30px' }}>
                                        <Link to="/product" id='menu-list' style={{ Linkstyles, color: 'black', textDecoration: 'none', fontFamily: 'Poppins', fontSize: '120%', fontWeight: 'boldlight' }}><p style={{ marginTop: '10px' }}>Product</p></Link>
                                    </li>
                                    <li style={{ listStyle: 'none', marginRight: '30px' }}>
                                        <Link to="/Services" id='menu-list' style={{ Linkstyles, color: 'black', textDecoration: 'none', fontFamily: 'Poppins', fontSize: '120%', fontWeight: 'boldlight' }}><p style={{ marginTop: '10px' }}>Services</p></Link>
                                    </li>
                                    
                                    <li style={{ listStyle: 'none', marginRight: '30px' }}>
                                        <Link to="/educationalvideos" id='menu-list' style={{ Linkstyles, color: 'black', textDecoration: 'none', fontFamily: 'Poppins', fontSize: '120%', fontWeight: 'boldlight' }}><p style={{ marginTop: '10px' }}>Educational Videos</p></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Link to="/appointment"><button id='Appointmentbutton' style={{ marginLeft: '60px', border: 'none', background: 'black', width: '150px', height: '50px', color: 'white', fontFamily: 'Poppins', opacity: '80%' }}>MAKE AN APPOINTMENT</button></Link>
                        </div>

                    </div>

                </nav>
                
                
        );
    }

export default Dentalnavbar;