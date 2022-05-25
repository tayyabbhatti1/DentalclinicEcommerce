
import Dentalnavbar from "../webcomp/Dentalnavbar";
import Footer from "../webcomp/Footer";
import FrontpageCarousel from "../webcomp/FrontpageCarousel";
import ServiceForm from "../webcomp/ServiceForm";
import Doctor from "../webcomp/Doctors/Doctor"

import Bookappointment from "../webcomp/Bookappointment";



const Home = () =>{
    return(
        <div>
            <Dentalnavbar/>
            <FrontpageCarousel/>
            <Doctor/>
            <ServiceForm/>
            <Bookappointment/>
            <Footer/>
        </div>
    )
}

export default Home;