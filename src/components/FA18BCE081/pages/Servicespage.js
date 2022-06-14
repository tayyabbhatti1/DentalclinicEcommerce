import React from 'react';
import Headbar from '../webcomp/Headbar';
import Dentalnavbar from '../webcomp/Dentalnavbar';
import Footer from '../webcomp/Footer';
import Bookappointment from '../webcomp/Bookappointment';
import Servicecard from '../webcomp/Servicecard/Servicecard';




const Servicespage = () => {
    return (
        <div >
            <Dentalnavbar/>
            <Headbar name={"OUR SERVICES"} />
            <Servicecard/>
            <Bookappointment/>
            <Footer />
        </div>

    )
}
export default Servicespage;