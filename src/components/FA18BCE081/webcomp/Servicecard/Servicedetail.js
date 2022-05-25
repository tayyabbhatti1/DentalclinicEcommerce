import React from 'react';

import { useLocation } from 'react-router-dom';
import Bookappointment from '../Bookappointment';
import Dentalnavbar from '../Dentalnavbar';
import Footer from '../Footer';
import '../Servicecard/Servicedetail.css'

function Servicedetail() {
    let location = useLocation();
    let servicedetaildata = location.state;

    return (
        <div>
            <Dentalnavbar />
            <div className='row' style={{background:'white'}}>
                <div className='col-6'>
                    <img src={servicedetaildata.img} alt='' style={{ height: '300px', width: "600px" }} />
                </div>
                <div className='col-6' id='Servicedetailp'>
                    <h1 className='text-center' id='Servicedetailh1'>{servicedetaildata.title}</h1>
                    <p>{servicedetaildata.desc2}</p>
                    <h2 className='text-center' id='Servicedetailh1'>{servicedetaildata.title1}</h2>
                    <p>{servicedetaildata.desc3}</p>
                    <p>{servicedetaildata.desc4}</p>
                    <p>{servicedetaildata.desc5}</p>
                    <p>{servicedetaildata.desc6}</p>
                    <p>{servicedetaildata.desc7}</p>
                    <p>{servicedetaildata.desc8}</p>
                </div>
            </div>
            <Bookappointment/>
            <Footer />
        </div>
    )
}
export default Servicedetail;