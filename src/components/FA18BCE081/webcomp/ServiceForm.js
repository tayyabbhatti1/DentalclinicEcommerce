import React, { Component } from 'react';
import { Link} from "react-router-dom";
import './Serviceform.css'


class ServiceForm extends Component {
    state = {}
    render() {
        return (
            <div className='serviceform container-fluid'>
                <div class="row">
                    <div class="col" id='col1'>
                        <h2 id='callus'>Call us</h2>
                        <p className='callusp'>
                            <button id='b1'>0301-9495903</button>
                            <br />
                            <button id='b2'>0300-9495903</button>
                            <br />
                            <button id='b3'>042-35302147</button>
                        </p>
                    </div>
                    <div class="col" id='col2'>
                        <h2 id='clinicaddress'>Clinic Address</h2>
                        <p id='clinicaddressp'>797-J,k,H.Block G4 M.A Johar Town, Lahore,
                            Pakistan (dummy).
                        </p>
                        <Link to='/contactus' id='clinicaddressb'> View Clinic on map </Link>
                    </div>
                    <div class="col" id='col3'>
                        <h2 id='opening'>Opening Hours</h2>
                        <p id='openingp'>
                            Monday – Saturday <br/>
                            11:00am – 03:00pm <br/>
                            06:00pm – 10:00pm <br/>

                            Friday <br/>

                            6:00pm – 10:00pm
                        </p>
                        
                    </div>
                    <div class="col" id='col4'>
                    <h2 id='bestdentist'>Best Dentist in Town</h2>
                    <p id='bestdentistp'>
                    Find the best team of Dentists in Johar town Lahore only at Dental Experts. A dental clinic that you can trust.
                    </p>
                    <Link to='/appointment' id='bestdentistb'>Make an Appoinment</Link>
                    </div>
                </div>


            </div>
        );
    }
}

export default ServiceForm;