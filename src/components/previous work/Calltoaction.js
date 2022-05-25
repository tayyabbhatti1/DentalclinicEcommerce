import React from 'react';
import './Calltoaction.css'
import appscreen from '../Images/appscreen.png';
import googleplaystore from '../Images/google-play-store.png';
import appstore from '../Images/app-store.png'

const Calltoaction = () => {
    return ( 
        <>
        <div className='calltoaction-main'>
            <img src={appscreen} id='appscreen'/>
            <h1>Download Our Bookkaru Mobile App Now</h1>
            <h3>Download our app for the fastest, most convenient way to Book Tickets Online.</h3>
            <p>Our app has all your booking needs covered: Secure payment channels, easy 4-step booking process, and sleek user designs. What more could you ask for?
                <ul id='ulbullet'>
                <li>Booking Online</li>
                <li>Recharge</li>
                <li>Secure Payment</li>
                <li>and much more....</li>
                </ul>

                <a href='https://www.apple.com/app-store/'><img id='appstore' src={appstore} /></a>
                <a href='https://play.google.com/store/apps'><img id='playstore' src={googleplaystore}/></a>
                
            </p>
        </div>
        </>
    );
}
 
export default Calltoaction;