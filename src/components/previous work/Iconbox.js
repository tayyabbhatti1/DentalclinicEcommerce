import React from 'react';
import './Iconbox.css'
import { FaLock, FaThumbsUp, FaBullhorn, FaLifeRing} from 'react-icons/fa'

const Iconbox = () => {
    return (
        <>
        <div className='iconboxblue'>

                <FaLock id='lock'/>
                <h2 id='securepayment'>100% Secure Payments</h2><br/>
                <p id='securepaymentp'>Moving your card details to a much more secured place.</p>

                <FaThumbsUp id='thumbsup'/>
                <h2 id='trust'>Trust Pay</h2><br/>
                <p id='trustp'>100% Payment Protection.</p>

                <FaBullhorn id='bullhorn'/>
                <h2 id='horn'>Deals & Offers</h2><br/>
                <p id='hornp'>Best Deals & Offers For You.</p>

                <FaLifeRing id='lifering'/>
                <h2 id='ring'>24X7 Support</h2><br/>
                <p id='ringp'>We're here tp help. Have a query and need help ? <a href='/'>Click here</a></p>



                
                
        </div>
        </>
    );
}

export default Iconbox;