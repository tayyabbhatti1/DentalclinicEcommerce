/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.css';
import picLogo from '../Images/bookkaru.png';
import {
    FaUserCircle,
    FaPhoneAlt
} from 'react-icons/fa';
function Navbar() {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3" id="header-1">
                   <img id='header-img' src={picLogo} alt="" />

                </div>
                <div className="col-md-3" id="header-2">
                    <ul>
                        <li>Home</li>
                        <li>Bus</li>
                        <li>Events</li>
                    </ul>

                </div>
                <div className="col-md-2" id="header-3">
                <p>Login / Sign up</p></div>
                <div className="col-md-1" id="header-4">
                <i class="bi bi-person-circle"><FaUserCircle/></i>
                </div>
                <div className="col-md-1" id="header-5">
                <i class="bi bi-telephone-fill"><FaPhoneAlt/></i>
                </div>
                <div className="col-md-2" id="header-6">
                    <a href="#"> <p id='h6-p1'>Need Assistence with Bookkaru? Call Us Now: 0311-1999560</p>
                </a>
               
                </div>
                
            </div>
            </div>
     );
}

export default Navbar;