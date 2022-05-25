import React from 'react';
import Headbar from '../webcomp/Headbar';
import Dentalnavbar from '../webcomp/Dentalnavbar';
import Footer from '../webcomp/Footer';
import Submitform from '../webcomp/Submitform';
import './Contact.css'




const Contactus = () => {
    return (
        <div>
            <Dentalnavbar />
            <Headbar name={"CONTACT US"} />
            <div className='row'>
                <div className='col-8 container-fluid'>
                    <Submitform />
                </div>
                <div className='col-4'>
                    <h2 id='contacth2'>Best Dentist Near You!</h2>
                    <p id='contactp'><h5>Clinic Address:</h5> 97-J,k,H.Block G4 M.A Johar Town, Lahore,
                        Pakistan.</p>
                    <p id='contactp2'><h5>Phone:</h5> 042-35302147 | 0301-8495903 | 0300-959503</p>

                </div>
            </div>

            <Footer />
        </div>

    )
}
export default Contactus;