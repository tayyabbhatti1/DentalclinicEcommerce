import React from 'react';
import './Footer.css';

import easypaisa from '../Images/easypaisa.png';
import jazzcash from '../Images/jazzcash.png';
import visa from '../Images/visa.png';
import cashlogo from '../Images/cashlogo.png';
import wallet from '../Images/wallet.png';

import {
    FaInstagram,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';


const Footer = () => {
    return (
        <>
            <div className='footer-main'>
                <div className='footer-payment'>
                    <h4>Payment</h4>
                    <div>
                        <img id='easypaisa' src={easypaisa} />
                        <img id='jazzcash' src={jazzcash} />
                        <img id='visa' src={visa} />
                        <img id='wallet' src={wallet} />
                        <img id='cashlogo' src={cashlogo} />
                    </div>
                </div>

                <div className='footer-subscribe'>
                    <h4>Subscribe</h4>
                    <form>
                        <input type="text" placeholder='Your Email Address' />
                        <button><h4>Subscribe</h4></button>
                    </form>

                </div>
                <div className='footer-keepintouch'>
                    <h4>keep in touch</h4>
                    <div className='socialmedia'>
                        <a href='https://www.facebook.com/'>
                            <FaFacebook id='facebook' />
                        </a>
                        <a href='https://www.instagram.com/'>
                            <FaInstagram id='instagram' />
                        </a>
                        <a href='https://www.Linkedin.com/'>
                            <FaLinkedinIn id='linkedin' />
                        </a>
                    </div>
                </div>
                <div className='footer-menu'>
                    <div className='menu'>
                        <ul>
                            <li><a href='/'>About Us</a></li>
                            <li><a href='/'>Terms & Conditions of Use</a></li>
                            <li><a href='/'>FAQs</a></li>
                            <li><a href='/'>Support</a></li>
                        </ul>
                    </div>
                    <div className='copyright'>
                        <p id='copyright'>Copyright © 2020 <a href='/'>BOOKKARU</a>. All Rights Reserved.</p>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Footer;
