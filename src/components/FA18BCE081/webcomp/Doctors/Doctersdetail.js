import React from 'react';

import { useLocation } from 'react-router-dom';
import Bookappointment from '../Bookappointment';
import Dentalnavbar from '../Dentalnavbar';
import Footer from '../Footer';

function Doctersdetail() {
    let location = useLocation();
    let doctordetaildata = location.state;

    return (
        <div>
            <Dentalnavbar />
            <div className='row' style={{background:'white'}}>
                <div className='col-6'>
                    <img src={doctordetaildata.img} alt='' style={{ height: '300px', width: "600px" }} />
                </div>
                <div className='col-6' id='Servicedetailp'>
                    <h1 className='text-center' id='Servicedetailh1'>{doctordetaildata.Name}</h1>
                    <p>{doctordetaildata.descD2}</p>
                    </div>
            </div>
            <Bookappointment/>
            <Footer />
        </div>
    )
}
export default Doctersdetail;