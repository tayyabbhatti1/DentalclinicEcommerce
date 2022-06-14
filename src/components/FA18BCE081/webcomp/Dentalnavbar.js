import React from 'react';
import { Link } from "react-router-dom";

import '../webcomp/Dentalnavbarstyle.css'




const Dentalnavbar = () => {

    const Linkstyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'normal'
        }
    }

    return (

        <nav className='fluid me-auto  justify-content-center ' style={{width:'100%'}}>
            <div className='fluid me-auto row justify-content-center' style={{ background: '#3CBEB2', height: '160px' }}>

                <div className='container-fluid me-auto' id='logo1' style={{ height: '60px', background: '#faf8f8' }}>
                    <img src={"/Images/logo-02.png"} alt='Logo' style={{ width: '150px' }} />
                </div>

                <div className='col-8' >
                    <div className="menu text-center mt-4 mb-4">
                        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '60px' }}>
                            <li style={{ listStyle: 'none', marginRight: '30px' }}>
                                <Link to="/" id='menu-list' style={{ Linkstyles, color: 'black', textDecoration: 'none', fontFamily: 'Poppins', fontSize: '120%', fontWeight: 'boldlight' }}><p >Home</p></Link>
                            </li>
                            <li style={{ listStyle: 'none', marginRight: '30px' }}>
                                <Link to="/product" id='menu-list' style={{ Linkstyles, color: 'black', textDecoration: 'none', fontFamily: 'Poppins', fontSize: '120%', fontWeight: 'boldlight' }}><p>Product</p></Link>
                            </li>
                            <li style={{ listStyle: 'none', marginRight: '30px' }}>
                                <Link to="/Services" id='menu-list' style={{ Linkstyles, color: 'black', textDecoration: 'none', fontFamily: 'Poppins', fontSize: '120%', fontWeight: 'boldlight' }}><p>Services</p></Link>
                            </li>

                            <li style={{ listStyle: 'none', marginRight: '30px' }}>
                                <Link to="/educationalvideos" id='menu-list' style={{ Linkstyles, color: 'black', textDecoration: 'none', fontFamily: 'Poppins', fontSize: '120%', fontWeight: 'boldlight' }}><p>Educational Videos</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-2 text-center mt-4 mb-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to="/appointment"><button id='Appointmentbutton' style={{ border: 'none', background: 'black', width: '150px', height: '50px', color: 'white', fontFamily: 'Poppins', opacity: '80%' }}>MAKE AN APPOINTMENT</button></Link>
                </div>
                <div className='col-2 text-center mt-4 mb-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to="/Login"><button id='Loginbutton' style={{borderRadius:'20px', border: 'none', background: 'black', width: '100px', height: '50px', color: 'white', fontFamily: 'Poppins', opacity: '80%' }}>Login</button></Link>
                </div>

            </div>

        </nav>


    );
}

export default Dentalnavbar;